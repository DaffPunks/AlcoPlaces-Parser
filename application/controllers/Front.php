<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Front extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();

        $this->load->helper('url');
    }

    public function index() {

        $this->load->view('admin');
    }

    public function app() {

        $this->load->view('app');
    }

    public function test() {

        $this->load->view('test');
    }

    public function nn() {

        $this->load->view('nn');
    }
}