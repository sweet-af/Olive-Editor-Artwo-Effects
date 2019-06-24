/***
    Artwo Color Switcher
    
    Inspired by https://www.shadertoy.com/view/Ml2Gz3
    Adapted by Artwo for the Olive-Editor Community

***/

uniform sampler2D myTexture;
varying vec2 vTexCoord;

uniform vec3 key_color_red;
uniform vec3 key_color_green;
uniform vec3 key_color_blue;
uniform vec3 key_color_white;
uniform vec3 key_color_black;

vec3 lerp(vec3 a, vec3 b, float r) { return mix(a,b,r); }

void main( void )
{
    // Tweak your color cube here:
    vec3 red = key_color_red.rgb;
    vec3 green = key_color_green.rgb;
    vec3 blue = key_color_blue.rgb;
    vec3 redgreen = vec3(1.0, 1.0, 0.0); 
    vec3 redblue = vec3(1.0, 0.0, 1.0);
    vec3 greenblue = vec3(0.0, 1.0, 1.0);
    vec3 white = key_color_white.rgb;
    vec3 black = key_color_black.rgb;
    
    vec4 textureColor = texture2D(myTexture, vTexCoord);
    vec3 rgb = textureColor.rgb;
    
    vec3 ta = lerp(black, red, rgb.r);
    vec3 tb = lerp(green, redgreen, rgb.r);
    vec3 tc = lerp(blue, redblue, rgb.r);
    vec3 td = lerp(greenblue, white, rgb.r);
    
    vec3 ab = lerp(ta, tb, rgb.g);
    vec3 cd = lerp(tc, td, rgb.g);
    
    vec3 abcd = lerp(ab, cd, rgb.b);

    gl_FragColor = vec4(
		abcd, 1
	);
}