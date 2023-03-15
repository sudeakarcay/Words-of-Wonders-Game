var items = ['SUE', 'CUE', 'SAUCE', 'USE', 'ACCUSE', 'ACE', 'SEA', 'CAUSE', 'CASE']
var clickedItems = [];
var wordList = [];
var word = '';
var word2 = '';

function shakeFunc(element, times, distance, speed) {
	for (var i = 0; i < times; i++) {
		element.animate({ marginTop: '-=' + distance }, speed)
			.animate({ marginTop: '+=' + distance }, speed);
	}
}

$(function () {
	$('.circle').click(function (e) {
		$('#shuffle').addClass('disabledButton')
		if (!$(this).hasClass('shake')) {
			word += $(this).text();
			word2 = $(this).text();
		}
		if ($(this).hasClass('shake')) {
			shakeFunc($(this), 3, '10px', 90);
		}
		else {
			$(this).addClass('shake');
			$(this).css('background', '#FF9');
			$('#output').append(word2);
			word2 = '';
		}
	})

	$('#shuffle').click(function (e) {
		if (!$('#shuffle').hasClass('disabledButton')) {
			var arr = ['deg-0', 'deg-60', 'deg-120', 'deg-180', 'deg-240', 'deg-300']
			var child = $('#wheel').children()
			var a = 0
			for (a; a < child.length - 1; a++) {
				var rand = Math.floor(Math.random() * (6 - a));
				var degree = arr[rand]
				arr.splice(rand, 1);
				child[a].className = 'circle ' + degree
			}
			$('.circle').removeClass('shake');
			$('.circle').css('background', 'none');
		}
		else {
			shakeFunc($('#shuffle'), 3, '10px', 90);
		}
	})

	$('#wheel').contextmenu(function (e) {
		if (items.includes(word) && !clickedItems.includes(word)) {
			clickedItems.push(word);
			$('.circle').removeClass('shake');
			$('.circle').css('background', 'none');
			$('.' + word.toLowerCase()).css('text-indent', '0px')
			if (word === 'ACE') {
				$('.fifth-word .overlappedAce').css('text-indent', '0px');
				$('.fifth-word .overlappedAce').css('background-color', 'red');
				$('.ace').css('background-color', 'red');
			}
			if (word === 'SEA') {
				$('.first-word .overlappedSea').css('text-indent', '0px');
				$('.first-word .overlappedSea').css('background-color', 'red');
				$('.sea').css('background-color', 'red');
			}
			if (word === 'SUE') {
				$('.fifth-word .overlappedSue').css('text-indent', '0px');
				$('.fifth-word .overlappedSue').css('background-color', 'red');
				$('.sue').css('background-color', 'red');
			}
			if (word === 'CAUSE') {
				$('.first-word .overlappedCause').css('text-indent', '0px');
				$('.first-word .overlappedCause').css('background-color', 'red');
				$('.second-word .overlappedCause').css('text-indent', '0px');
				$('.second-word .overlappedCause').css('background-color', 'red');
				$('.third-word .overlappedCause').css('text-indent', '0px');
				$('.third-word .overlappedCause').css('background-color', 'red');
				$('.cause').css('background-color', 'red');
			}
			if (word === 'CASE') {
				$('.seventh-word .overlappedCase').css('text-indent', '0px');
				$('.seventh-word .overlappedCase').css('background-color', 'red');
				$('.case').css('background-color', 'red');
			}
			if (word === 'CUE') {
				$('.eight-word .overlappedCue').css('text-indent', '0px');
				$('.eight-word .overlappedCue').css('background-color', 'red');
				$('.cue').css('background-color', 'red');
			}

			if (word === 'USE') {
				$('.use').css('background-color', 'red');
			}

			if (word === 'ACCUSE') {
				$('.accuse').css('background-color', 'red');

			}
			if (word === 'SAUCE') {
				$('.sauce').css('background-color', 'red');
			}
			word = '';
			word2 = '';
			$('#output').empty();
			$('#shuffle').removeClass('disabledButton');
			$('.circle').removeClass('shake');
			$('.circle').css('background', 'none');
		}
		else {
			if (word === 'ACE') {
				$('.seventh-word').fadeOut('slow', function () {
					$('.seventh-word').fadeIn();
				});
				$('.fifth-word .overlappedAce').fadeOut('slow', function () {
					$('.fifth-word .overlappedAce').fadeIn();
				});
			}
			if (word === 'CASE') {
				$('.seventh-word .overlappedCase').fadeOut('slow', function () {
					$('.seventh-word .overlappedCase').fadeIn();
				});
				$('.eight-word').fadeOut('slow', function () {
					$('.eight-word').fadeIn();
				});
			}
			if (word === 'CUE') {
				$('.eight-word .overlappedCue').fadeOut('slow', function () {
					$('.eight-word .overlappedCue').fadeIn();
				});
				$('.ninth-word').fadeOut('slow', function () {
					$('.ninth-word').fadeIn();
				});
			}
			if (word === 'SEA') {
				$('.first-word .overlappedSea').fadeOut('slow', function () {
					$('.first-word .overlappedSea').fadeIn();
				});
				$('.fifth-word').fadeOut('slow', function () {
					$('.fifth-word').fadeIn();
				});
			}
			if (word === 'SUE') {
				$('.fifth-word .overlappedSue').fadeOut('slow', function () {
					$('.fifth-word .overlappedSue').fadeIn();
				});
				$('.sixth-word').fadeOut('slow', function () {
					$('.sixth-word').fadeIn();
				});
			}
			if (word === 'ACCUSE') {
				$('.first-word').fadeOut('slow', function () {
					$('.first-word').fadeIn();
				});
			}
			if (word === 'CAUSE') {
				$('.fourth-word').fadeOut('slow', function () {
					$('.fourth-word').fadeIn();
				});
				$('.first-word .overlappedCause').fadeOut('slow', function () {
					$('.first-word .overlappedCause').fadeIn();
				});
				$('.second-word .overlappedCause').fadeOut('slow', function () {
					$('.second-word .overlappedCause').fadeIn();
				});
				$('.third-word .overlappedCause').fadeOut('slow', function () {
					$('.third-word .overlappedCause').fadeIn();
				});
			}
			if (word === 'SAUCE') {
				$('.second-word').fadeOut('slow', function () {
					$('.second-word').fadeIn();
				});
			}
			if (word === 'USE') {
				$('.third-word').fadeOut('slow', function () {
					$('.third-word').fadeIn();
				});
			}

			shakeFunc($('.showWord'), 4, '10px', 100);
			setTimeout(function () {
				word = '';
				word2 = '';
				$('#output').empty();
				$('#shuffle').removeClass('disabledButton');
				$('.circle').removeClass('shake');
				$('.circle').css('background', 'none');
			}, 1000);
		}
	})


	$('#clue').click(function () {
		var remainingClues = items.filter(function (items) {
			return !clickedItems.includes(items)
		}
		)
		if (!$('#clue').hasClass('.hintActivated')) {
			if (remainingClues.includes('ACE')) {
				$('.fifth-word .overlappedAce').animate({
					textIndent: 0
				}, 700)
				$('.seventh-word .ace').animate({
					textIndent: 0
				}, 700)
			}
			if (remainingClues.includes('CASE')) {
				$('.eight-word .case').animate({
					textIndent: 0
				}, 700)
			}
			if (remainingClues.includes('CUE')) {
				$('.ninth-word .cue').animate({
					textIndent: 0
				}, 700)
			}

			if (remainingClues.includes('SUE')) {
				$('.fifth-word .overlappedSue').animate({
					textIndent: 0
				}, 700)
				$('.sixth-word .sue').animate({
					textIndent: 0
				}, 700)

			}
			if (remainingClues.includes('ACCUSE')) {
				$('.first-word .accuse').animate({
					textIndent: 0
				}, 700)
			}
			if (remainingClues.includes('CAUSE')) {
				$('.fourth-word .cause').animate({
					textIndent: 0
				}, 700)
			}
			if (remainingClues.includes('SAUCE')) {
				$('.second-word .sauce').animate({
					textIndent: 0
				}, 700)
			}
			if (remainingClues.includes('USE')) {
				$('.third-word .use').animate({
					textIndent: 0
				}, 700)

			}
			$('#clue').addClass('.hintActivated');

		}
		else {

			if (remainingClues.includes('ACE')) {
				if (remainingClues.includes('SEA') && !remainingClues.includes('CASE')) {
					$('.fifth-word .overlappedAce').animate({
						textIndent: -9999
					}, 700)
					$('.seventh-word .clueAce').animate({
						textIndent: -9999
					}, 700)
				}
				else if (!remainingClues.includes('SEA') && remainingClues.includes('CASE')) {
					$('.seventh-word .overlappedCase').animate({
						textIndent: -9999
					}, 700)
					$('.seventh-word .clueAce').animate({
						textIndent: -9999
					}, 700)
				}
				else if (!remainingClues.includes('SEA') && !remainingClues.includes('CASE')) {
					$('.seventh-word .clueAce').animate({
						textIndent: -9999
					}, 700)
				}
				else {
					$('.fifth-word .overlappedAce').animate({
						textIndent: -9999
					}, 700)
					$('.seventh-word .ace').animate({
						textIndent: -9999
					}, 700)
				}
			}
			if (remainingClues.includes('CASE')) {
				if (!remainingClues.includes('CUE')) {
					$('.eight-word .clueCase').animate({
						textIndent: -9999
					}, 700)
				}
				else {
					$('.eight-word .case').animate({
						textIndent: -9999
					}, 700)
				}
			}
			if (remainingClues.includes('CUE')) {
				if (remainingClues.includes('CUE')) {
					$('.ninth-word .cue').animate({
						textIndent: -9999
					}, 700)
				}
			}
			if (remainingClues.includes('SEA')) {
				if (remainingClues.includes('ACCUSE')) {
					$('.first-word .overlappedSea').animate({
						textIndent: -9999
					}, 700)
				}
			}
			if (remainingClues.includes('SUE')) {
				if (!remainingClues.includes('SEA')) {
					$('.sixth-word .sue').animate({
						textIndent: -9999
					}, 700)
				}
				else {
					$('.fifth-word .overlappedSue').animate({
						textIndent: -9999
					}, 700)
					$('.sixth-word .sue').animate({
						textIndent: -9999
					}, 700)
				}

			}
			if (remainingClues.includes('ACCUSE')) {
				if (!remainingClues.includes('SEA') && !remainingClues.includes('CAUSE')) {
					$('.first-word .accuseClue').animate({
						textIndent: -9999
					}, 700)
				}
				else if (remainingClues.includes('SEA') && !remainingClues.includes('CAUSE')) {
					$('.first-word .accuseClue').animate({
						textIndent: -9999
					}, 700)
					$('.first-word .overlappedSea').animate({
						textIndent: -9999
					}, 700)
				}
				else if (!remainingClues.includes('SEA') && remainingClues.includes('CAUSE')) {
					$('.first-word .accuseClue').animate({
						textIndent: -9999
					}, 700)
					$('.first-word .overlappedCause').animate({
						textIndent: -9999
					}, 700)
				}
				else {
					$('.first-word .accuse').animate({
						textIndent: -9999
					}, 700)
				}
			}
			if (remainingClues.includes('CAUSE')) {
				$('.fourth-word .cause').animate({
					textIndent: -9999
				}, 700)
			}
			if (remainingClues.includes('SAUCE')) {
				if (!remainingClues.includes('CAUSE')) {
					$('.second-word .sauceClue').animate({
						textIndent: -9999
					}, 700)
				}
				else {
					$('.second-word .sauce').animate({
						textIndent: -9999
					}, 700)
				}
			}
			if (remainingClues.includes('USE')) {
				if (!remainingClues.includes('CAUSE')) {
					$('.third-word .useClue').animate({
						textIndent: -9999
					}, 700)
				}
				else {
					$('.third-word .use').animate({
						textIndent: -9999
					}, 700)
				}
			}
			$('#clue').removeClass('.hintActivated')

		}
	})
})
