const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let location = 'RSA'
let customers = '1'
let currency = 'R'
let shipping = null

if ( location === 'RSA' ) { 
    ( currency === 'R' ) && ( shipping == 400 )
}   else if (location == 'NAM') {
    ( currency == '$' ) && ( shipping == 600 ) 
}   else {
    shipping == 800
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED 

if ( shoes + batteries + pens + shirts + toys >= ( 1000 && ( location === 'RSA' ) || ( location === 'NAM' ))) {
	if ( location = 'NAM' && customers == 1 ) {
		shipping = 0 && currency === 'R'
	} else if ( location = 'RSA' && customers == 1 ) {
        shipping = 0 && currency === '$'
    } else if ( shipping = 0 && customers !== 1 ) {
        console.log(FREE_WARNING)
    }
}

if (location == 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping + toys));

