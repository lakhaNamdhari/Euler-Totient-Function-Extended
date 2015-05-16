/*
*	Solution to Euler Totient Extended
*
*	@author Lakha Singh
*/

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


// Factorize integer
var factorize = (function(){
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

	return function( num ){
		var limit = num/2;

		var i = 2, k = 1;

		// Calulated factors
		var factors = [];

		// For primr numbers, simply return the number
		if ( isPrime(num) ){
			return [ num ];
		}

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
}());

// Start
readInput(function( input ){
	var i;
	// Execute all Test Cases
	for ( i = 0; i < input.length; i++ ){
		console.log( factorize( input[ i ].N ) );
	}

	// Terminate
	exit();
});

// Test 4566547864562
/*

		while( num !== 1 ){
						while( num % i === 0){
				factors.push( i );
				num /= i;
			}
			i++;
			*/

