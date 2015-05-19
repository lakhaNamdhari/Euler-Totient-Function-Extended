/*
*	Solution to Euler Totient Extended
*
*	@author Lakha Singh
*/

var MOD = 1000000009;

// Terminate program
var exit = function( code ){
	code = code || '';
	console.error( code );
	process.exit('ERROR: ' + code);
};

// Validate Test cases, 1 >= T <= 128
var validateT = function( T ){
	if ( !(T >=1 && T <= 128) ){
		exit('Test-cases should be between 1 and 128');
	}
}

// Read User input
var readInput = function( callback ){
	// Set encoding
	process.stdin.setEncoding('utf8');

	// Denotes number of test cases
	var T;

	// user input
	var input = [];

	// to store intermediate values
	var helper;

	callback = callback || function(){};

	// Input handler
	var h = function( data ){
		if ( !T ){
			T = parseInt( data, 10 );
			validateT( T );
		}else{
			if ( T !== 0 ){
				helper = data.split(' ');
				input.push({
					N: parseInt( helper[0], 10 ),
					K: parseInt( helper[1], 10 )
				});
				T--;

				if ( T === 0){
					process.stdin.removeListener('data', h);
					callback( input );
				}
			}
		}
	};

	// Start Listening to user input
	process.stdin.addListener('data', h);
};

// Power in range of MOD
var powMod = function( n, p ){ 
	var res = n;

	// hold temp results
	var temp = 1;

	if ( !p ){
		return 1;
	}

	while( p > 1 ){ 
		if ( !(p % 2 === 0) ){
			temp *= res;
			if ( temp >= MOD ){
				temp %= MOD;
			}
		}
		res *= res;
		if ( res >= MOD ){
			res %= MOD;
		}
		p = parseInt( p / 2, 10);
	}
	res *= temp;
	if ( res >= MOD ){
		res %= MOD;
	}

	return res;
}

// To find if given number is prime
var isPrime = function( num ){
	var limit = parseInt( Math.sqrt( num ), 10);

	var i = 2, k = 1;

	// As 2 and 3 cant be included in 6k+1, hence checking them seperately
	for ( ; i <= 3; i++ ){
		if ( num % i === 0 ){
			return false;
		}
	}

	// For optimzation, checking against only prime divisors
	while ( i <= limit ){
		for ( j = -1; j <= 1; j +=2 ){
			i = 6*k + j;

			if ( num % i === 0 ){
				return false;
			}
		}
		k++;
	}
	return true;
};


// Factorize integer
var factorize = function( num ){
	var limit = num/2;

	var i = 2, k = 1;

	// Calulated factors
	var factors = [];

	// For optimzation, checking against only prime divisors
	for ( ; i <= 3; i++ ){
		while( num % i === 0){
			factors.push( i );
			num /= i;
		}
	}

	while( num !== 1 ){
		for ( j = -1; j <= 1; j +=2 ){
			i = 6*k + j;

			while( num % i === 0){
				factors.push( i );
				num /= i;
			}
		}
		k++;
	}

	return factors;
};

// Function evaluation for prime numbers
var evalFnPr = function( n, k ){
	var i;

	var sum = 0;

	for ( i = 1; i < n; i++ ){
		sum += powMod( i, k);

		if ( sum >= MOD ){
			sum %= MOD;
		}
	}

	return sum;
};

// Function evaluation for composite numbers
var evalFn = function( n, k ){
	var i, a;

	// as 1 is coprime to all numbers
	var sum = 1;

	var isCoprime;

	var	factors =  factorize( n ); console.log( factors );

	for ( i = 2; i < n; i++ ){
		isCoprime = true;
		for ( a = 0; a < factors.length; a++ ){
			if ( i % factors[ a ] === 0 ){
				isCoprime = false;
				break;
			}
		}
		if ( isCoprime ){
			sum += powMod(i, k);
			
			if ( sum >= MOD ){
				sum %= MOD;
			}
		}
	}

	return sum;
};

// Start
readInput(function( input ){
	var i;

	var sum = 0;

	var n, k;

	// Execute all Test Cases
	for ( i = 0; i < input.length; i++ ){
		n = input[ i ].N;
		k = input[ i ].K;

		// when n is prime
		if ( isPrime( n ) ){
			sum = evalFnPr( n, k );
		}

		// when n is composite
		else{
			sum = evalFn( n, k );
		}

		// Display result
		console.log( sum );
	}

	// Terminate
	exit();
});

// Test 4566547864562
