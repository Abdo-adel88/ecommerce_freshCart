import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shapping-address',
  templateUrl: './shapping-address.component.html',
  styleUrls: ['./shapping-address.component.css']
})
export class ShappingAddressComponent implements OnInit {


  cartId: string | null = "";
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get("id");
      }
    })
  }
  constructor(private _CartService: CartService, private route: Router, private _ActivatedRoute: ActivatedRoute) { }

  shappingAddressForm: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required])

  })

  redirectToPaymentPage(url: string) {
    window.location.href = url
  }

  handelshappingAddress(form: FormGroup) {
    if (this.shappingAddressForm.valid) {
      this._CartService.onlinePayment(this.cartId, form.value).subscribe({
        next: (response) => {
          this.redirectToPaymentPage(response.session.url)
        }
        ,
       
        error: (err) => {
          console.log(err);
        }
      })



    }
  }
}
