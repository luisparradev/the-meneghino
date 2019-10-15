<h1>Posts on Tumblr Text Editor</h1>

<p>For any post, configured as Plain Text/HTML in the editor, call first the theme's stylesheet (update the link every time a new release is published from the GitHub repository):</p>

''<code>''<link rel="stylesheet" id="elementor-animations-css" href="https://cdn.jsdelivr.net/gh/luisparradev/the-meneghino@0.2-alpha/style.min.css" type="text/css" media="all">''

<h2>Text Posts</h2>

<p>Upload the image to the GitHub repository and update its link in the code. Then fill in the title and body of the text. For the title just write it in the respective field, and for the body, replace it in this line of code and paste it in the editor:</p>

<p>'<p class="post__excerpt">{Body}</p>'</p>

<h2>Photo Posts</h2>

<p>Upload the photo directly in the Tumblr's editor, and paste the following code in the caption. Replace {Permalink} with the link of the individual post, Title with the title, and {Caption} with the caption.</p>

'''
<div class="post__text px-2 pb-2 px-lg-4 pb-lg-4">
 <h2 class="post__title"><a href="{Permalink}">Title</a></h2>
 <p class="post__excerpt">{Caption}</p>
</div>
'''

<h2>Quote Posts</h2>

<p></p>

<h2>Link Posts</h2>

<p></p>

<h2>Chat Posts</h2>

<p></p>

<h2>Audio Posts</h2>

<p></p>

<h2>Video Posts</h2>

<p></p>
