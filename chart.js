body {
    background-color: #ffffff;
    font-family:'Raleway', 'Open Sans', sans-serif;
}

p {
    transform: scale(1.05);
    margin: 5px 0;
}
strong {
    font-weight: 700;
}
h1, h2, h3, h4, h5 {
    margin: 10px 0 15px 0;
}
header, nav {
    text-align: center;
    min-width: 767px;
}
li {
    display: inline;
}

/* 	Information boxes for different chart layouts */
/* Positioning */
#initial-content, #a, #b, #c, #d, #e, #f,#view-source-letters, #view-party-type, #view-donor-type, #view-source-type, #partyInfo, #conservative, #labour, #libdem, #individual, #company, #union, #society, #other, #public-or-private-money, #public-or-private-money-split, #private-money, #public-money { 
    position: absolute; 
}

/* Initial appearance on load */
#view-party-type, #view-donor-type, #view-source-type, #view-source-letters {
    display: none;

}

/* View containers */
#initial-content, #view-source-type {
    left: 650px;
    width: 400px;
}
#view-party-type {
    left: 650px;
    width: 272px;
}

/*  Public or private funds view */

#public-or-private-money {
    max-width: 300px;
}
#public-or-private-money-split {
    top: 550px;
    left: -600px;
    text-align: center;   
}
#private-money, #public-money {
    width: 200px;
}
#private-money {
    left: 200px;
}
#public-money {
    left: 610px;
}

/*  Party view */
#conservative, #labour, #libdem { padding: 10px; }
#conservative {
    background: rgb(255, 0, 255);
    top: 110px;
}
#labour {
    background: rgb(255, 255, 0);
    top: 330px;
}
#libdem {
    background: rgb(184, 184, 184);
    top: 550px;
}

/*	Donor type layout */
#view-donor-type {
    height: 100%;
    left: 500px;
    width: 370px;
    
}
#individual {
    top: 55px;
}
#company {
    top: 390px;
}
#union {
    top: 660px;
}
#society {
    top: 205px;
    text-align: right;
    right: 0;
}
#other {
    top: 530px;
    text-align: right;
    right: 0
}

/* letters scale */
#view-source-letters {
    height: 100%;
    left: 600px;
    width: 370px;
}

#div_0_1500 {
    top: 120px;
    position: relative;
}

#div_1500_5500 {
    top: 400px;
    position: relative;
}

#div_more_5500 {
    top: 650px;
    position: relative;
}

/* Value scale */

#value-scale {
    opacity: 0.5;
    font-size: 0.75em;
}
#a, #b, #c, #d, #e { left: 40px; }
#a { top: 635px;}
#b { top: 585px;}
#c { top: 535px;}
#d { top: 485px;}
#e { top: 435px;}
#f { top: 648px; left: 575px; }

/* End of view */

circle {
    stroke: rgba(238, 238, 238, 1);
    stroke-width: 0.5;
}
circle.active {
    stroke: rgba(17, 17, 17, 0.8);
    stroke-width: 5;
}

.legend circle {
    stroke: #aabbcc;
    stroke-width: 1;
    fill: none;
}
.tooltip {
    margin: 0;
    padding: 5px;
    line-height: 1.4;
    display: none;
    height: 125px;
    width: 280px;
    text-align: left;
    border: 4px solid rgba(0, 0, 0, .8);
    border-radius: 2px;
    -moz-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
}
.tooltip p, h3 {
    margin: 0.2em;
}
.lab {
    fill: #40ff00;
}
.lib {
    fill: #FDBB30;
}
.con {
    fill: #087FBD;
}
.snp {
    fill: #C9C945;
}
/*!
Pure v0.2.1
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/yui/pure/blob/master/LICENSE.md
*/
.pure-button {
    /* Structure */
    display: inline-block;
    *display: inline;
    /*IE 6/7*/
    zoom: 1;
    line-height: normal;
    white-space: nowrap;
    vertical-align: baseline;
    text-align: center;
    cursor: pointer;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
/* Firefox: Get rid of the inner focus border */
.pure-button::-moz-focus-inner {
    padding: 0;
    border: 0;
}
/*csslint unqualified-attributes:false, outline-none:false*/
.pure-button {
    font-size: 100%;
    *font-size: 90%;
    /*IE 6/7 - To reduce IE's oversized button text*/
    *overflow: visible;
    /*IE 6/7 - Because of IE's overly large left/right padding on buttons */
    padding: 0.5em 1.5em 0.5em;
    color: #444;
    /* rgba not supported (IE 8) */
    color: rgba(0, 0, 0, 0.80);
    /* rgba supported */
    *color: #444;
    /* IE 6 & 7 */
    border: 1px solid #999;
    /*IE 6/7/8*/
    border: none rgba(0, 0, 0, 0);
    /*IE9 + everything else*/
    background-color: #E6E6E6;
    text-decoration: none;
    border-radius: 2px;
    -webkit-font-smoothing: antialiased;
    /* Transitions */
    -webkit-transition: 0.1s linear -webkit-box-shadow;
    -moz-transition: 0.1s linear -moz-box-shadow;
    -ms-transition: 0.1s linear box-shadow;
    -o-transition: 0.1s linear box-shadow;
    transition: 0.1s linear box-shadow;
}
.pure-button-hover, .pure-button:hover, .pure-button:focus {
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000', GradientType=0);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), color-stop(40%, rgba(0, 0, 0, 0.05)), to(rgba(0, 0, 0, 0.10)));
    background-image: -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.10));
    background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.10));
    background-image: -ms-linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.10));
    background-image: -o-linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.10));
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.10));
}
.pure-button:focus {
    outline: 0;
}
.pure-button-active, .pure-button:active {
    color: rgb(0, 120, 231);
    color: #fff
}

h2:hover , p:hover, h1:hover, h3:hover, h5:hover, strong:hover {
    z-index: 55 !important;
    -webkit-backface-visibility: hidden;
    -webkit-transform: scale(1.1,1.2);
    transform: scale(1.1,1.2);
}
