<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/* controller for hello */

class Widiyanata extends CI_Controller {

    public function index() {
        $view_params = array(
            'title' => 'CodeIgniter - Hello World',
            'subtitle' => 'Welcome to codeIgniter',
            'message' => 'Hello world'
        );

        $this->load->view('widiyanata');
    }

}
