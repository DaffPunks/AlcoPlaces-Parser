<?php
/**
 *
 */

class Place_model extends CI_Model
{

    public function __construct()
    {
        parent::__construct();

        $this->load->database();
    }

    public function get_phone($contacts_group)
    {

        foreach ($contacts_group as $contacts) {
            foreach ($contacts->contacts as $contact) {
                if ($contact->type == "phone") {
                    return $contact->text;
                }
            }
        }

        return '';
    }

    public function get_website($contacts_group)
    {

        foreach ($contacts_group as $contacts) {
            foreach ($contacts->contacts as $contact) {
                if ($contact->type == "website") {
                    return $contact->text;
                }
            }
        }

        return '';
    }

    public function get_real_id($id)
    {
        return explode('_', $id)[0];
    }

    public function check_for_type($rubrics)
    {
        $is_cafe_bar_club_primary = false;

        $is_not_fastfood = true;

        foreach ($rubrics as $rubric) {
            if ($rubric->kind == "primary") {

                //Is bar?
                if ($rubric->short_id == 159) {
                    $is_cafe_bar_club_primary = true;
                }

                //Is cafe?
                if ($rubric->short_id == 161) {
                    $is_cafe_bar_club_primary = true;
                }

                //Is club?
                if ($rubric->short_id == 173) {
                    $is_cafe_bar_club_primary = true;
                }

                //Is hookah
                if ($rubric->short_id == 110357) {
                    $is_cafe_bar_club_primary = true;
                }

                //Is restaraunt?
                if($rubric->short_id == 164) {
                    $is_cafe_bar_club_primary = true;
                }

                //Is fastfood?
                if ($rubric->short_id == 165) {
                    $is_not_fastfood = false;
                }

                //Is kid place?
                //if($rubric->short_id == 16743) {
                //    $is_not_kidplace = false;
                //}
            }
        }

        return $is_cafe_bar_club_primary && $is_not_fastfood;
    }

    public function insert($attr) {
        $this->db->insert('places', $attr);
    }
}