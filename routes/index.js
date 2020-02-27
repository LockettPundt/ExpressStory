'use strict'
const express = require('express'),
router = express.Router();

const story1Text = `<p>Life.. err.. Death<br>
<em>comes at you fast.</em>
</p>
<p class="storytext">
    Hi there. My name is Death.<br>
    One day I was on an errand to claim the life of a giant. When I 
    found him and demanded him to stop, he refused my plea and struck me down.
    I lay there, on the brink of of my death, worried that the world
    will no longer have someone to claim the lives of the living. 
</p>`;

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Story 1',
            nextPage: 'localhost:4444/story2',
            story1Text: story1Text
        },
        partials: {
            partial: 'partial-index'
        }
    })
})



module.exports = router;