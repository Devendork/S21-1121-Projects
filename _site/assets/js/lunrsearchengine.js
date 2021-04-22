
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About These Projects",
    "body": "During the semester, each student conducted a user-centered design project that included user research, generating themes, personas, and models, wireframing and, lastely creating hi-fi prototyopes. Apps for Noticing: Our technologies can help us find new experiences in familiar spaces, perhaps even the spaces within which we have been isolated. This theme asks you how you might design applications that help people learn or notice new aspects of their everyday environments. This theme was created by Laura Devendorf. Mapping Computer Vision Applications : Computer vision technologies have been used in a variety of applications - from facial recognition to deep fakes, generated content of realistic human beings. They have also come under scrutiny for their lack of diversity, leading to apps that do not work as well on minorities, as well as the inherent danger they might pose to democracy. This theme asks you to describe current uses of computer vision technologies to the public. This theme was created by Morgan Scheuerman. Tools To Manage Our Media Diets: During the COVID-19 pandemic, many of us are bingeing comfort media (The Office, anyone?) or obsessively consuming news—or both. 2020 might be the year of the doomscroll. The media we consume influences our mood, our relationships, and our productivity. . . so why is it so hard to manage? What digital tools might help us track the media we consume — and perhaps build better habits and more balanced media diets? This theme was created by Jordan Wirfs-Brock. Difficult Data: 	How do you explain difficult concepts? How do you translate complicated data to the layperson? How do you as a designer and scientist connect with audiences? This theme asks you to create an application or technology where the input is data and the output is art. 					View our Canvas Site		More information about this course can be found on Canvas. 		Instructors		The course was led by Laura Devendorf with amazing support from Jordan Wirfs-Brock, Kandrea Wade, and Morgan Scheuerman 		 Textbooks		 We followed two textbooks this semester:		 		 	Amy Ko's Design Methods open educational text		 	Ellen Lupton's Design is Storytelling book		 		 	"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Happy Circles HTML Embed                              :               Load on website:                                                                                                                                                                                                                                                                      Student Portfolio Template - PDF Embed                              :                     This browser does not support PDFs. Please download the PDF to view it: Download PDF.   &lt;/embed&gt;:                                                                                                                                                                                                                                                                Basic Happy Circles - PDF                              :               link to the pdf image:                                                                          All Stories:                                                                                                     Happy Circles HTML Embed              :       Load on website:                                                                                                           Student Portfolio Template A              :       link to the pdf image:                                                                                                           Student Portfolio Template - PDF Embed              :             This browser does not support PDFs. Please download the PDF to view it: Download PDF.   &lt;/embed&gt;:                                                                                                           Basic Happy Circles - PDF              :       link to the pdf image:                                                                                                           Another Name              :       link to the pdf image:                   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/HTML/",
    "title": "Happy Circles HTML Embed",
    "body": "2021/04/20 -  Load on website "
    }, {
    "id": 6,
    "url": "http://localhost:4000/Title2/",
    "title": "Student Portfolio Template A",
    "body": "2018/01/11 - link to the pdf image       This browser does not support PDFs. Please download the PDF to view it: Download PDF.   &lt;/embed&gt;This is where the student’s content will go and we can add comments and share them and what not "
    }, {
    "id": 7,
    "url": "http://localhost:4000/PDF/",
    "title": "Student Portfolio Template - PDF Embed",
    "body": "2018/01/11 -       This browser does not support PDFs. Please download the PDF to view it: Download PDF.   &lt;/embed&gt;"
    }, {
    "id": 8,
    "url": "http://localhost:4000/Link/",
    "title": "Basic Happy Circles - PDF",
    "body": "2018/01/11 - link to the pdf image       This browser does not support PDFs. Please download the PDF to view it: Download PDF.   &lt;/embed&gt;"
    }, {
    "id": 9,
    "url": "http://localhost:4000/Image/",
    "title": "Another Name",
    "body": "2018/01/11 - link to the pdf image       This browser does not support PDFs. Please download the PDF to view it: Download PDF.   &lt;/embed&gt;This is where the student’s content will go and we can add comments and share them and what not layout: posttitle: “Can I define multiples”author: lauracategories: [ Difficult Data]tags: [iphone app, watch]image: “http://artfordorks. com/wordpress/wp-content/uploads/2021/03/WearAnimation_Web. gif”description: “This student’s project description”— "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});