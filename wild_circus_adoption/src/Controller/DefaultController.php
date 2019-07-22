<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class DefaultController extends AbstractController
{
    /**
     * @Route ("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('homepage.html.twig');
    }

    /**
     * @Route ("/adoption", name="adoption")
     */
    public function show(): Response
    {
        return $this->render('adoption.html.twig');
    }
}
