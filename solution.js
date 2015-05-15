/*
*	Solution to Euler Totient Extended
*
*	@author Lakha Singh
*/

// Exit
var exit = function( code ){
	code = code || '';
	console.error( code );
	process.exit('ERROR: ' + code);
};

// Validate Test case numbers, 1 >= T <= 128
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


readInput(function( input ){
	console.log( input );

	exit();
});

