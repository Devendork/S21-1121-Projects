---
layout: default
title: Home
---

{% if page.url == "/" %}

<!-- Featured
================================================== -->
<section class="featured-posts">
    <div class="section-title">
        <h2><span>Featured</span></h2>
    </div>
    <div class="row">

    {% for post in site.posts %}

        {% if post.featured == true %}

            {% include featuredbox.html %}

        {% endif %}

    {% endfor %}

    </div>
</section>

{% endif %}

<!-- Posts Index
================================================== -->
<section class="recent-posts">

    <div class="section-title">

        <h2><span>All Stories</span></h2>

    </div>

    <div class="row listrecent">

        {% for post in paginator.posts %}

        {% include postbox.html %}

        {% endfor %}

    </div>

</section>

<!-- Pagination
================================================== -->
<div class="bottompagination">
<div class="pointerup"><i class="fa fa-caret-up"></i></div>
<span class="navigation" role="navigation">
    {% include pagination.html %}
</span>
</div>





## Welcome to the Showcase of Student Projects from INFO 1121
During the semester, each student conducted a user-centered design project that included user research, generating themes, personas, and models, wireframing and, lastely creating hi-fi prototyopes. You can view each of the projects here. 

### Apps for Noticing :camera_flash: :seedling:	:loudspeaker:	
Our technologies can help us find new experiences in familiar spaces, perhaps even the spaces within which we have been isolated. This theme asks you how you might design applications that help people learn or notice new aspects of their everyday environments.This theme was created by Laura Devendorf.


### Mapping Computer Vision Applications :world_map: :computer: :eyeglasses: 
Computer vision technologies have been used in a variety of applications - from facial recognition to deep fakes, generated content of realistic human beings. They have also come under scrutiny for their lack of diversity, leading to apps that do not work as well on minorities, as well as the inherent danger they might pose to democracy. This theme asks you to describe current uses of computer vision technologies to the public. This theme was created by Morgan Scheuerman.


### Tools To Manage Our Media Diets :wrench: :satellite: :coconut:	
During the COVID-19 pandemic, many of us are bingeing comfort media (The Office, anyone?) or obsessively consuming news—or both. 2020 might be the year of the doomscroll. The media we consume influences our mood, our relationships, and our productivity...so why is it so hard to manage? What digital tools might help us track the media we consume — and perhaps build better habits and more balanced media diets? This theme was created by Jordan Wirfs-Brock.


### Difficult Data :1234: :pill:	
How do  you explain difficult concepts? How do you translate complicated data to the layperson? How do you as a designer and scientist connect with audiences? This theme asks you to create an application or technology where the input is data and the output is art.  
