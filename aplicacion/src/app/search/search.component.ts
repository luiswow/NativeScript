import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application, Page, } from "@nativescript/core";
import { NoticiasService } from "../domain/noticias.service";
import {isAndroid, isIOS } from "tns-core-modules/platform";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    styles: ['']
  
})

export class SearchComponent implements OnInit {

    constructor(public noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
 
    if (isIOS) {
        this.noticias.agregar("Hola");
        this.noticias.agregar("Hola 2");
        this.noticias.agregar("Hola 3");
    
       } 
       this.noticias.agregar("Hola Android ");



    }
    

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
