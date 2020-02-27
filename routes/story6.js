'use strict'
const express = require('express'),
router = express.Router();

const story6Text = `<p>"Have I not<br>sent you one messenger<br>
<em>after another?</em>
</p>
<p class="p2">
    <em>Did not fever come and 
    strike you,</em>
    <strong>and shake you,</strong> and throw you down? Has not dizziness numbed your 
    head? Has not gout pinched your limbs? Did your ears not buzz? Did toothache 
    not bite into your cheeks? Did your eyes not darken? And furthermore, has not 
    my own brother Sleep reminded you every night of me? During the night did you 
    not lie there as if you were already dead?"
</p>
<p class="p3">
    He stood there speechless.
</p>
<p class="p2">
    I mean, who could blame him. I motioned with a gentle
    wave and he quietly followed me to his Fate. Thanks for reading. I'll catch you 
    later lol.
</p>`;

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Story 6',
            nextPage: 'localhost:4444',
            story6Text: story6Text
        },
        partials: {
            partial: 'partial-story6'
        }
    })
})



module.exports = router;