import * as React from "react";
import "./Contact.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

export default function BasicTextFields() {
  const popoverWhatsapp = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Whatsapp Us</Popover.Header>
      <Popover.Body>74900 00648</Popover.Body>
    </Popover>
  );

  const popoverPhone = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Call Us</Popover.Header>
      <Popover.Body>
        74900 00648 <br /> 73839 54937 <br /> 97372 97123
      </Popover.Body>
    </Popover>
  );

  const popoverEmail = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Email Us</Popover.Header>
      <Popover.Body>join@bhavnanaturals.com</Popover.Body>
    </Popover>
  );

  return (
    <div id="#contact">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-info">
        <a href="">
          <YouTubeIcon className="contact-icons" />
        </a>

        <a href="https://www.instagram.com/invites/contact/?i=9w0jtzcfjzvr&utm_content=pnmaocs">
          <InstagramIcon className="contact-icons" />
        </a>

        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popoverPhone}
        >
          <CallIcon className="contact-icons" />
        </OverlayTrigger>

        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popoverWhatsapp}
        >
          <WhatsAppIcon className="contact-icons" />
        </OverlayTrigger>

        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popoverEmail}
        >
          <EmailIcon className="contact-icons" />
        </OverlayTrigger>
      </div>
    </div>
  );
}
