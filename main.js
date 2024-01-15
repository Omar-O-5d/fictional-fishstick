
var canvas= new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png",function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}
	

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(hole_obj);
	});	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL!!!!";
    document.getElementById("myCanvas").style.borderColor="red";
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
		if(ball_y >= 0)
    {
        ball_y=ball_y - block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("when up arrow key is pressed, X=" + ball_x + ", Y =" + ball_y);
        canvas.remove(ball_obj);
        ball=ball_update();
        
    }
	}

	function down()
	{
		if(ball_y <= 500)
    {
        ball_y=ball_y + block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("when down arrow key is pressed, X=" + ball_x + ", Y =" + ball_y);
        canvas.remove(ball_obj);
        ball_update();
        
    }
	}

	function left()
	{
			if(ball_x >= 0)
    {
        ball_x=ball_x - block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("when left arrow key is pressed, X=" + ball_x + ", Y =" + ball_y);
        canvas.remove(ball_obj);
        ball_update();
        
    }
	
	}

	function right()
	{
		if(ball_x <= 850)
		{
			ball_x=ball_x + block_image_width;
			console.log("block image width =" + block_image_width);
			console.log("when right arrow key is pressed, X=" + ball_x + ", Y =" + ball_y);
			canvas.remove(ball_obj);
			ball_update();
			
		}
	}
	
}

