import React from "react";
import "./About.css";
import { Box } from "@mui/system";

function About() {
  return (
    <>
      
      <Box
      id="#about"
        className="about-container"
        component="span"
        sx={{
          "& > :not(style)": { m: 1, width: "155ch" },
        }}
      >
        <h2 className="about-heading">About Us</h2>
        <div className="about">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          ratione impedit cum. Ipsam, tempore fuga ut, error excepturi corrupti
          minus expedita dicta mollitia dolore nemo ipsum voluptatem. Corrupti
          nobis amet similique at tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam illo totam eligendi similique saepe officia, iste cum, reprehenderit atque est explicabo commodi accusamus facilis in fugit quod quas quae! Eum magni, accusantium sit magnam itaque nostrum inventore explicabo quibusdam qui temporibus assumenda voluptatum culpa esse eius fugit pariatur vel sunt sapiente molestias unde consequuntur minus! Fugiat blanditiis sint maxime eaque nostrum atque nulla earum doloremque, nam dolore a laudantium, error consequatur unde commodi ratione? Impedit sapiente sunt a veniam pariatur ad id sit non quis dolore ipsa nostrum voluptatibus maiores magni consectetur odit nam, nihil corrupti fugiat excepturi exercitationem libero vero. Repellat optio, esse assumenda odit atque magnam quisquam possimus veniam dolorem exercitationem nam, reiciendis, ea quis tempora sapiente consectetur! Dolor, fugiat! Accusamus perspiciatis aperiam officia doloribus maiores eius reprehenderit quos adipisci ut et. Saepe mollitia veniam nihil inventore officiis molestias ab. Eligendi nobis sunt quos placeat quod ut eaque cupiditate corporis temporibus, aspernatur, vel et debitis dolorum, atque neque! Fugit, eaque molestias. Voluptates exercitationem nesciunt iure incidunt quibusdam, odit ducimus, alias expedita delectus laudantium adipisci officia asperiores libero est odio quas quam mollitia! Alias facere, repellendus fugiat impedit exercitationem quisquam vero, explicabo nesciunt deserunt, nulla veniam praesentium ipsum eius?
        </div>
      </Box>
    </>
  );
}

export default About;
