import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { HelperService } from "src/app/services/helper.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean;
  success: boolean;
  info: string;

  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      subject: new FormControl("", Validators.required),
      message: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  onsubmit() {
    if (this.contactForm.valid) {
      // {name:"fatih",email:"f@outlook.com"}

      this.helperService.sendContactEmail(this.contactForm.value).subscribe(
        data => {
          this.success = true;
          this.contactForm.reset();
          this.info =
            "Mesajınız alınmıştır. En kısa sürede dönüş yapılacaktır.";
        },
        error => {
          this.success = false;
          this.info =
            "Bir hata meydana geldi. Lütfen daha sonra tekrar deneyiniz";
        }
      );
    } else {
      return false;
    }
  }
}
