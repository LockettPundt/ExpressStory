'use strict'
const express = require('express'),
router = express.Router();

const story2Text = `<p class="p3">
<em>"If I stay lying here in a corner, no one will die in the world, 
and it will become so filled with people that they won't have room to 
stand beside one another."</em>
</p>
<p class="p3">
<strong>I was soon surprised to find a young man tapping on my shoulder and 
asking me if I was ok. 
He offered me drink from his flask and helped me
to my feet again.</strong>
</p>`

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Story 2',
            nextPage: 'localhost:4444/story3',
            story2Text: story2Text
        },
        partials: {
            partial: 'partial-story2'
        }
    })
})



module.exports = router;