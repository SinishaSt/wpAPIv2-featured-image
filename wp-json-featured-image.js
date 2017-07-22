 jQuery(document).ready(function($) {
    $.get( "http://example.com/wp-json/wp/v2/posts?&_embed=true", 
    function( data ) {
        $.each( data , function( i, post) {
		          var img = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url; //feature image -  change for image size - "sizes.medium.source_url"
                   content = '<p>' + post.title.rendered + '<p> <br>';
				   content += '<img src="' + img + ' "></img> <br>';
                   content += '<a href="' + post.link +  '">' + post.link + '<a>';
				   

                    $(content).appendTo("#data");
        });
    });
    });	