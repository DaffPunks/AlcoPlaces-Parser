<?php
/**
 *
 */

class Types_model extends CI_Model
{

    public function __construct()
    {
        parent::__construct();

        $this->load->database();
    }

    public function insert($attr) {
        $this->db->insert('types', $attr);
    }

    public function insert_tp($attr) {
        $this->db->insert('place_types', $attr);
    }
}