/*
*	Solution to Euler Totient Extended
*
*	@author Lakha Singh
*/

var MOD = 1000000007;

// Set encoding
process.stdin.setEncoding('utf8');

// Terminate program
var exit = function( code ){
	code = code || '';
	process.exit('ERROR: ' + code);
};

// Validate Test cases, 1 >= T <= 128
var validateT = function( T ){
	if ( T < 1 || T > 128 ){
		exit('Test-cases should be between 1 and 128');
	}
}

// Read User input
var readInput = function( callback ){
	// Denotes number of test cases
	var T, helper;

	callback = callback || function(){};

	// Start Listening to user input
	process.stdin.addListener('data', function( data ){
		var n, k;

		if ( !T ){
			T = parseInt( data, 10 );
			validateT( T );
		}else{
			helper = data.split(' ');
			n = parseInt( helper[0], 10 );
			k = parseInt( helper[1], 10 );

			callback(n, k);
			T--;

			if ( !T ){
				exit();	
			}
		}
	});
};

// Power in range of MOD
var powMod = function( n, p ){ 
	var res = 1;

	while( p ){ 
		if ( p & 1 ){
			res *= n;

			if ( res >= MOD ){
				res %= MOD;
			}
		}
		n *= n;
		if ( n >= MOD ){
			n %= MOD;
		}
		p = Math.floor( p/2 );
	}

	return res;
}

// Calculates GCD
var gcd = function(a, b){
	if ( b == 0 ){
		return a;
	}
	a %= b;
	return gcd( b, a);
}


// evaluation sum of co-primes
var calcSum = function( n, k ){
	var i, sum = 0;

	for ( i = 1; i < n; i++ ){
		if ( gcd(n, i) == 1 ){
			sum += powMod(i, k);

			if ( sum >= MOD ){
				sum -= MOD;
			}
		}
	}

	return sum;
};

// Start
readInput(function( n, k ){
	console.log( calcSum( n, k ) );
});

