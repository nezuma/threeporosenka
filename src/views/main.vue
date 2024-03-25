<script>
    export default {
        name: 'main'
    }
</script>
<template>
	<div class="container">
	    <a href="/" class="top">
			<div class="akcia">
				<h1>Акции</h1>
				<h3>Узнать подробнее</h3>
			</div>
			<img src="../assets/torso.png" class="image1">
		</a>
		<div class="content">
			<button class="menu-button">Меню</button>
		</div>
		<div class="tiles">
			<a href="/" class="tile">
				<h2>Наша бонусная программа</h2>
				<img src="../assets/discount.png" class="image2">
			</a>
			<a href="/send-form" class="tile1">
				<h2>Праздник для вашего малыша</h2>
				<img src="../assets/calendar.png" class="image3">
			</a>
		</div>
	</div>
</template>
<style>
	.container {
		width: 100%;
		height: 90vh;
	}
	.top {
		width: 350px;
    	height: 330px;
    	background-image: url(/src/assets/ellipse.png);
    	position: absolute;
    	background-repeat: no-repeat;
    	text-align: center;
		text-decoration: none;
		color: indianred;
		z-index: 1;
	}	
	.top h1, .top h3 {
		transition: all .3s;
	}
	.top:hover h1, .top:hover h3 {
		color: rgb(0, 22, 65);
		transition: all .3s;
	}
	.image1 {
		position: absolute;
    	top: 98px;
    	left: 123px;
    	z-index: 1;
	}
	.akcia {
		position: absolute;
    	left: 57px;
    	top: 58px;
	}
	.akcia h1 {
		font-family: "Raleway";
    	font-weight: 900;
	}
	.akcia h3{
		font-family: "Raleway";
    	font-weight: 600;
	}
	.menu-button {
		position: absolute;
    	left: 43%;
		top: 40%;
    	background: indianred;
    	height: 50px;
    	width: 200px;
    	color: yellow;
    	font-family: 'Raleway', sans-serif;
    	font-size: 20px;
    	font-weight: 900;
    	border-radius: 25px;
    	border: 0;
		cursor: pointer;
		transition: all .3s;
	}
	.menu-button:hover {
		background: rgb(212, 114, 114);
		transition: all .3s;
	}
	.tile {
		position: absolute;
    	top: 440px;
    	left: 190px;
    	display: flex;
    	flex-wrap: wrap;
    	justify-content: center;
    	background: #a5bdb0;
    	border-radius: 15px;
    	width: 285px;
    	height: 190px;
		text-decoration: none;
		transition: all .3s;
	}
	.tile:hover {
		background: #8fb9a2;
		transition: all .3s;
	}
	.image2 {
		position: absolute;
    	left: 200px;
    	top: 95px;
    	width: 70px;
	}
	.tile h2 {
		text-align: center;
	}
	.tile1 {
		position: absolute;
    	top: 440px;
    	right: 190px;
    	display: flex;
    	flex-wrap: wrap;
    	justify-content: center;
    	background: #ea8f83;
    	border-radius: 15px;
    	width: 285px;
    	height: 190px;
		text-decoration: none;
		cursor: pointer;
		transition: all .3s;
	}
	.tile1:hover {
		background: #e47869;
		transition: all .3s;
	}
	.tile1 h2 {
		text-align: center;
	}
	.image3 {
		position: absolute;
    	right: 25px;
    	top: 95px;
    	width: 70px;
	}
	/* для смартфонов — 320 px, 480 px и выше; */
	/* для планшетов — 768 px и выше; */
	/* для нетбуков — 1024 px и выше; */
	/* для мониторов — 1280 px, 1600 px, 1920 px и выше. */
	@media (max-width: 1024px) and (min-width: 320px) {
		.top {
			width: 250px;
    		height: 230px;
			background: url(/src/assets/ellipse.png) -94px -113px;
			background-repeat: no-repeat;
		}
		.akcia {
			left: 35px;
    		top: 50px;
    		font-size: 14px;
		}
		.image1 {
			top: 75px;
    		left: 55px;
		}
		.tile {
			left: 100px;
		}
		.tile1 {
			right: 100px;
		}
	}
	@media (max-width: 768px) and (min-width: 320px) {
		.tile {
			left: 60px;
		}
		.tile1 {
			right: 60px;
		}
		.menu-button {
			left: 275px;
    		top: 264px;
		}
	}
	@media (max-width: 715px) and (min-width: 320px) {
		.tile {
			width: 210px;
		}
		.tile1 {
			width: 210px;
		}
		.image2 {
			left: 130px;
		}
		.menu-button {
			left: 210px;
		}
	}
	@media (max-width: 412px) and (min-width: 320px) {
		.tile {
			width: 290px;
			left: 50px;
		}
		.tile1 {
			width: 290px;
    		left: 50px;
    		top: 655px;
			margin-bottom: 55px;
		}
		.image2 {
			left: 200px;
		}
		.menu-button {
			left: 100px;
		}
	}
</style>