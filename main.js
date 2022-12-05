var canvas = document.getElementById("myCanvas");
// Create canvas variable

//Set initial positions for ball and hole images.
var ball_x = 5;
var ball_y = 5;
var holex= 90;
var holey= 90;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h.png",function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:holey,
			left:holex
		})
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	fabric.image.fromURL("ball.png",function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:bally,
			left:ballx
		})
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */

	if ((ballx==holex)&&(bally==holey)) {
		canvas.remove(ball_obj);
	}
	
	
		
	 else {


		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		
			bally = ball_y - block_image_height;
			console.log("block image height =" +block_image_height);
			console.log("When Up arrow key is pressed, X=" + ballx + ", Y=" + bally);
			canvas.remove(ball_obj);
			new_image();
		 
	}

	function down()
	{
		
			bally = ball_y + block_image_height;
			console.log("block image height =" +block_image_height);
			console.log("When Down arrow key is pressed, X=" + ballx + ", Y=" + bally);
			canvas.remove(ball_obj);
			new_image();
		 
	}

	function left()
	{
		if(ball_x >5)
		{
			
				ballx = ball_x + block_image_height;
				console.log("block image height =" +block_image_height);
				console.log("When Right arrow key is pressed, X=" + ballx + ", Y=" + bally);
				canvas.remove(ball_obj);
				new_image();
			 
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
				ballx = ball_x + block_image_height;
				console.log("block image height =" +block_image_height);
				console.log("When Left arrow key is pressed, X=" + ballx + ", Y=" + bally);
				canvas.remove(ball_obj);
				new_image();
			 
		}
	}
	
}

