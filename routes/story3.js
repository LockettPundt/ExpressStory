'use strict'
const express = require('express'),
router = express.Router();

const story3Text = `<p>"Do you know,"<br>
<em>asked the stranger</em>
</p>
<p class="p3">
    as he stood up, "who I am, and whom 
    you have helped onto his legs again?" "No," answered the youth, "I do not 
    know you." "I am Death," he said. "I spare no one, nor can make an exception 
    with you. However, so you may see that I am grateful, I promise you that I will 
    not attack you without warning, but instead will send my messengers to you 
    before I come and take you away."
</p>
`;

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Story 3',
            nextPage: 'localhost:4444/story4',
            story3Text: story3Text
        },
        partials: {
            partial: 'partial-story3'
        }
    })
})



module.exports = router;