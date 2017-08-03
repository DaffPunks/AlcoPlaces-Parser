<?php
defined('BASEPATH') OR exit('No direct script access allowed');

include APPPATH . 'third_party/httpful.phar';

use Httpful\Request;

class Parser extends CI_Controller
{
    private $page = 1;

    public function __construct()
    {
        parent::__construct();

        $this->load->database();
        $this->load->model('place_model');
        $this->load->model('types_model');
    }

    public function index() {
        echo "index";
    }

    public function parse()
    {
        $this->db->db_debug = false;
        $search = $_GET['q'];
        $city = $_GET['city'];

        do {

            $params = array(
                "page_size" => 50,
                "page" => $this->page,
                "q" => $search,
                "region_id" => $city,
                "fields" => "dym,request_type,items.adm_div,items.attribute_groups,items.contact_groups,items.flags,items.address,items.rubrics,items.name_ex,items.point,items.region_id,items.external_content,items.org,items.group,items.schedule,items.ads.options,items.stat,context_rubrics,items.reviews,search_attributes",
                "key" => "rutnpt3272"
            );


            $response = Request::get('https://catalog.api.2gis.ru/2.0/catalog/branch/search?' . http_build_query($params))
                ->send();

//            var_dump($response);
//            echo json_encode($response->body);

            $total_pages = $response->body->result->total / 50 + 1;

            var_dump($this->page . " " . $total_pages);
//            var_dump($response);

            foreach ($response->body->result->items as $item) {

                if ($this->place_model->check_for_type($item->rubrics)) {

                    $organization['place_id'] = $this->place_model->get_real_id($item->id);
                    $organization['name'] = $item->name;
                    $organization['lat'] = $item->point->lat;
                    $organization['long'] = $item->point->lon;
                    $organization['address'] = $item->address_name;
                    if(isset($item->contact_groups)){
                        $organization['phone'] = $this->place_model->get_phone($item->contact_groups);
                        $organization['website'] = $this->place_model->get_website($item->contact_groups);
                    } else {
                        $organization['phone'] = "";
                        $organization['website'] = "";
                    }
                    if(isset($item->schedule)) {
                        $organization['schedule'] = json_encode($item->schedule);
                    } else {
                        $organization['schedule'] = "";
                    }
                    if(isset($item->reviews->general_rating)) {
                        $organization['rating'] = $item->reviews->general_rating;
                    } if(isset($item->reviews->rating)) {
                        $organization['rating'] = $item->reviews->rating;
                    } if(isset($item->reviews->items[1]->rating)) {
                        $organization['rating'] = $item->reviews->items[1]->rating;
                    }
                    if(isset($item->reviews->general_review_count)) {//general_review_count
                        $organization['reviews'] = $item->reviews->general_review_count;
                    } if(isset($item->reviews->review_count)) {
                        $organization['reviews'] = $item->reviews->review_count;
                    }
                    if(isset($item->attribute_groups)) {
                        $organization['tags'] = $this->place_model->get_tags($item->attribute_groups);
                    } else {
                        $organization['tags'] = "";
                    }
                    if(isset($item->attribute_groups)) {
                        $organization['eng_tags'] = $this->place_model->get_eng_tags($item->attribute_groups);
                    } else {
                        $organization['eng_tags'] = "";
                    }

                    $this->insert_tag($item->attribute_groups);


                    $this->place_model->insert([
                        'place_id' => $organization['place_id'],
                        'name' => $organization['name'],
                        'lat' => $organization['lat'],
                        'long' => $organization['long'],
                        'city' => $city,
                        'phone' => $organization['phone'],
                        'address' => $organization['address'],
                        'website' => $organization['website'],
                        'schedule' => $organization['schedule'],
                        'rating' => $organization['rating'],
                        'reviews' => $organization['reviews'],
                        'tags' => $organization['tags'],
                        'eng_tags' => $organization['eng_tags']
                    ]);

                    if ($this->db->error()['code'] == '0') {

                        $last_id_place = $this->db->insert_id();

                        foreach ($item->rubrics as $rubric) {
                            if($rubric->kind == "primary") {

                                $this->types_model->insert([
                                    'type_id' => $rubric->short_id,
                                    'name' => $rubric->name,
                                ]);

                                $this->db->where('type_id', $rubric->short_id);
                                $data = $this->db->get('types');
                                $results = $data->result_array();

                                $this->types_model->insert_tp([
                                    'place_id' => $last_id_place,
                                    'type_id' => $results[0]['id'],
                                ]);
                            }
                        }
                    }
                }
            }

            $this->page++;

        } while ($total_pages >= $this->page);
//        } while (0);

    }

    public function clear() {
        $places = $this->db->simple_query('TRUNCATE TABLE `places`');
        $types = $this->db->simple_query('TRUNCATE TABLE `types`');
        $place_types = $this->db->simple_query('TRUNCATE TABLE `place_types`');
        if ($places && $types && $place_types)
        {
            echo "Success!";
        }
        else
        {
            echo "Query failed!";
        }
    }

    public function insert_tag($attr_groups) {
        foreach ($attr_groups as $attr_group) {
            foreach ($attr_group->attributes as $attr) {
                $this->db->insert('tags', array(
                    'name' => $attr->tag,
                    'eng' => $attr->name
                ));
            }
        }
    }

    public function get() {

        $area = $_GET['area'] == null ? 1 : $_GET['area'];

        if($area == 1) {
            $this->db->where('lat >', 55.743217);
            $this->db->where('lat <', 55.759544);
            $this->db->where('long >', 37.569258);
            $this->db->where('long <', 37.614718);
            $this->db->where('city', 32);

            echo json_encode($this->get_area());

        } else if ($area == 2) {

            $this->db->where('lat >', 55.872687);
            $this->db->where('lat <', 56.003828);
            $this->db->where('long >', 37.219064);
            $this->db->where('long <', 37.498529);
            $this->db->where('city', 32);

            echo json_encode($this->get_area());

        } else if ($area == 3) {

            $this->db->where('city', 40);

            echo json_encode($this->get_area());

        } else if ($area == 4) {

            $this->db->where('city', 19);

            echo json_encode($this->get_area());

        }
    }

    public function get_map() {

        $area = $_GET['area'] == null ? 1 : $_GET['area'];

        if($area == 1) {
            $this->db->where('lat >', 55.743217);
            $this->db->where('lat <', 55.759544);
            $this->db->where('long >', 37.569258);
            $this->db->where('long <', 37.614718);
            $this->db->where('city', 32);

            echo json_encode($this->get_area());

        } else if ($area == 2) {

            $this->db->where('lat >', 55.872687);
            $this->db->where('lat <', 56.003828);
            $this->db->where('long >', 37.219064);
            $this->db->where('long <', 37.498529);
            $this->db->where('city', 32);

            echo json_encode($this->get_area());

        } else if ($area == 3) {

            $this->db->where('city', 40);

            echo json_encode($this->get_area());

        } else if ($area == 4) {

            if(isset($_GET['s'])){
                $this->db->where('lat >', $_GET['s']);
                $this->db->where('lat <', $_GET['n']);
                $this->db->where('long >', $_GET['w']);
                $this->db->where('long <', $_GET['e']);
            }
            $this->db->where('city', 19);
//            if(!isset($_GET['s'])) {
//                $this->db->order_by('RAND()');
//            }

            $data = $this->db->get('places', 70);

            $results = $data->result_array();

            echo json_encode($results);

        }
    }

    public function get_blocks() {

        $page = $_GET['page'];
        $limit = 30 * $page;

        $this->db->where('city', 19);
        $count = $this->db->count_all_results('places');

        $limit = $count < ($limit + 30);

        $this->db->where('city', 19);
        $this->db->limit($limit + 30, $limit);
        $data = $this->db->get('places');

        $results = $data->result_array();

        /*for ($i = 0; $i < count($results); $i++) {
            $this->db->where('place_id', $results[$i]['id']);
            $data_pt = $this->db->get('place_types');
            $types = $data_pt->result_array();

            $category = '';
            foreach ($types as $type) {
                $this->db->where('id', $type['type_id']);
                $data_t = $this->db->get('types');
                $type_a = $data_t->result_array();

                if($category != '') {
                    $category .= ', ';
                }

                $category .= $type_a[0] ['name'];
            }

            $results[$i]['category'] = $category;
        }*/

        echo json_encode(array(
            'count' => $count,
            'items' => $results,
            'limit' => $limit
        ));

    }

    public function get_types() {
        $this->db->select('name');
        $data = $this->db->get('types');
        $results = $data->result_array();

        echo json_encode($results);
    }

    public function get_tags() {
        $this->db->select('name, eng');
        $data = $this->db->get('tags');
        $results = $data->result_array();

        echo json_encode($results);
    }

    private function get_area() {
        $data = $this->db->get('places');

        $results = $data->result_array();

        for ($i = 0; $i < count($results); $i++) {
            $this->db->where('place_id', $results[$i]['id']);
            $data_pt = $this->db->get('place_types');
            $types = $data_pt->result_array();

            $category = '';
            foreach ($types as $type) {
                $this->db->where('id', $type['type_id']);
                $data_t = $this->db->get('types');
                $type_a = $data_t->result_array();

                if($category != '') {
                    $category .= ', ';
                }

                $category .= $type_a[0] ['name'];
            }

            $results[$i]['category'] = $category;
        }

        return $results;
    }


}
