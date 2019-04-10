<?php
require_once ("../resources/confiq.php");
?>
<?php
include (TEMPLATE_FRONT . DS . "header.php");
?>
<!-- Page loader -->
<div id="preloader"></div>
<!-- header section start -->
<?php
include (TEMPLATE_FRONT . DS . "header-top.php");
?>
<!-- header section end -->
<!-- menu section start -->
<?php
include (TEMPLATE_FRONT . DS . "main_nav.php");
?><!-- menu section end -->
		<!-- breadcrumb area start -->
		<section class="breadcrumb-area" id="home">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="breadcrumb-area-content">
							<h2>Contact Us</h2>
							<ul>
								<li><a href="index.php">Home</a></li>
								<li class="active"><a href="contact.php">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section><!-- breadcrumb area end -->
		<!-- contact section start -->
		<div class="ptb-100">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2">
						<div class="contact-us-area">
							<form action="#" method="POST">
								<div class="row">
									<div class="col-lg-6">
										<input type="text" name="replyname" placeholder="First Name">
									</div>
									<div class="col-lg-6">
										<input type="text" name="replysite" placeholder="Last Name">
									</div>
									<div class="col-lg-6">
										<input type="email" name="replyemail" placeholder="Email*">
									</div>
									<div class="col-lg-6">
										<input type="text" name="replysubject" placeholder="Subject*">
									</div>
									<div class="col-lg-12">
										<textarea placeholder="Your Message*"></textarea>
										<button class="theme-btn" type="submit" name="replysubmit">Post Comment</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div><!-- contact section end -->
		<!-- footer section start -->
<?php
include (TEMPLATE_FRONT . DS . "footer.php");
?>