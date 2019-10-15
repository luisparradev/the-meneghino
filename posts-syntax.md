# Posts on Tumblr Text Editor

For any post, configured as Plain Text/HTML in the editor, call first the theme's stylesheet (don't forget to update the link every time a new release is published from the GitHub repository):

~~~
<link rel="stylesheet" id="elementor-animations-css" href="https://cdn.jsdelivr.net/gh/luisparradev/the-meneghino@0.1-alpha/style.min.css" type="text/css" media="all">
~~~

### Text Posts

Upload the image to the GitHub repository and update its link in the code. Then fill in the title and body of the text. For the title just write it in the respective field, and for the body, replace it in this line of code and paste it in the editor:

~~~
<p class="post__excerpt">{Body}</p>
~~~

### Photo Posts

Upload the photo directly in the Tumblr's editor, and paste the following code in the caption. Replace {Permalink} with the link of the individual post, Title with the title, and {Caption} with the caption.

~~~
<div class="post__text px-2 pb-2 px-lg-4 pb-lg-4">
 <h2 class="post__title"><a href="{Permalink}">Title</a></h2>
 <p class="post__excerpt">{Caption}</p>
</div>
~~~

### Quote Posts



### Link Posts



### Chat Posts



### Audio Posts



### Video Posts
