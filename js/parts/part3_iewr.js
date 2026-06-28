/* Part 3 — Inner speech during reading
   SurveyJS survey — edit questions here. Re-run nothing; this IS the source.
 */
window.IVQ = window.IVQ || {};
IVQ.parts.part3 = function (jsPsych) {
  const survey_json = {
  "showQuestionNumbers": "off",
  "showPrevButton": true,
  "showProgressBar": "off",
  "pageNextText": "Next",
  "pagePrevText": "Previous",
  "completeText": "Continue",
  "pages": [
    {
      "name": "spr_inner_voice",
      "elements": [
        {
          "type": "html",
          "name": "natural_reading_q",
          "html": "<div class=\"pt-prompt\">As you read the sentences in the previous section, did it feel like your natural, everyday reading?</div>"
        },
        {
          "name": "natural_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "same",
              "text": "It felt exactly like my natural, everyday reading"
            },
            {
              "value": "mostly",
              "text": "Mostly like my natural reading, with small differences"
            },
            {
              "value": "somewhat",
              "text": "Somewhat different from my natural reading"
            },
            {
              "value": "very",
              "text": "Very different from my natural reading"
            },
            {
              "value": "totally",
              "text": "Totally different from my natural reading"
            }
          ],
          "isRequired": true
        },
        {
          "type": "html",
          "name": "natural_reading_explain_q",
          "html": "<div class=\"pt-prompt\">In what way was it similar, and in what way was it different?</div>"
        },
        {
          "name": "natural_reading_explain",
          "titleLocation": "hidden",
          "type": "comment"
        },
        {
          "type": "html",
          "name": "spr_inner_voice_q",
          "html": "<div class=\"pt-prompt\">As you read the sentences in the previous section, did you HEAR an inner voice or did you just understand the words without actually hearing an inner voice?</div>"
        },
        {
          "name": "spr_inner_voice",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "I understood the words written without hearing an inner voice"
            },
            {
              "value": "2",
              "text": "I heard an inner voice reading the words while reading the sentences"
            },
            {
              "value": "3",
              "text": "I heard an inner voice reading the words only for some of the sentences (please specify)"
            },
            {
              "value": "4",
              "text": "I heard an inner voice while reading the sentences, but it was not reading the words (please specify)"
            },
            {
              "value": "5",
              "text": "other experience of inner voice (please specify)"
            },
            {
              "value": "6",
              "text": "I do not remember my inner experience while reading"
            }
          ],
          "isRequired": true
        },
        {
          "type": "html",
          "name": "explain_spr_inner_voice_q",
          "html": "<div class=\"pt-prompt\">Please explain your choice</div>"
        },
        {
          "name": "explain_spr_inner_voice",
          "titleLocation": "hidden",
          "type": "comment",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "writing_inner_voice_q",
          "html": "<div class=\"pt-prompt\">While writing your answers, did you hear an inner voice saying the words you were typing?</div>"
        },
        {
          "name": "writing_inner_voice",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "during",
              "text": "Yes, while I was writing"
            },
            {
              "value": "before",
              "text": "Yes, before writing, when I thought about and planned my answer"
            },
            {
              "value": "both",
              "text": "Yes, both before and while writing"
            },
            {
              "value": "no",
              "text": "No, I did not hear an inner voice while writing"
            }
          ],
          "isRequired": true
        }
      ]
    },
    {
      "name": "survey_inner_voice",
      "elements": [
        {
          "type": "html",
          "name": "survey_inner_voice_q",
          "html": "<div class=\"pt-prompt\">As you read these survey questions (without moving your lips), do you HEAR an inner voice or do you just understand the words without actually hearing an inner voice?</div>"
        },
        {
          "name": "survey_inner_voice",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "I understand the words written here without hearing an inner voice"
            },
            {
              "value": "2",
              "text": "I hear an inner voice reading the words of this survey"
            }
          ],
          "showOtherItem": true,
          "otherText": "other experience of inner voice (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "reading_experience",
      "elements": [
        {
          "type": "html",
          "name": "reading_experience_q",
          "html": "<div class=\"pt-prompt\">If you do not hear an inner voice while you read, how would you describe your reading experience?</div>"
        },
        {
          "name": "reading_experience",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "I have nothing on my mind; I simply understand the words I am reading"
            },
            {
              "value": "2",
              "text": "I \"see\" the text in my mind"
            },
            {
              "value": "3",
              "text": "I imagine the scenario or situation described in the text"
            }
          ],
          "showOtherItem": true,
          "otherText": "other experience (please specify)",
          "isRequired": true
        }
      ],
      "visibleIf": "{survey_inner_voice} = '1'"
    },
    {
      "name": "hearing_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "hearing_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">When you read (without moving your lips), do you EVER HEAR an inner voice saying the words you are reading or do you just understand the words you are reading without actually hearing an inner voice?</div>"
        },
        {
          "name": "hearing_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "I always understand the words I am reading without hearing an inner voice"
            },
            {
              "value": "2",
              "text": "I sometimes hear an inner voice while reading"
            },
            {
              "value": "3",
              "text": "I always hear an inner voice while reading"
            },
            {
              "value": "4",
              "text": "I hear an inner voice while reading, but it is not reading the words (please specify)"
            }
          ],
          "isRequired": true
        },
        {
          "name": "hearing_inner_voice_reading_specify",
          "title": "Please describe what your inner voice does, if it is not reading the words.",
          "type": "comment",
          "visibleIf": "{hearing_inner_voice_reading} = '4'",
          "isRequired": true
        }
      ]
    },
    {
      "name": "frequency_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "frequency_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">How often do you hear an inner voice when you read?</div>"
        },
        {
          "name": "frequency_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Every time I read anything"
            },
            {
              "value": "2",
              "text": "Often"
            },
            {
              "value": "3",
              "text": "Sometimes"
            },
            {
              "value": "4",
              "text": "I’ve only heard an inner reading voice a few times"
            },
            {
              "value": "5",
              "text": "Never"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "hearing_inner_voice",
      "elements": [
        {
          "type": "html",
          "name": "hearing_inner_voice_q",
          "html": "<div class=\"pt-prompt\">When you read, how does your inner voice feel?</div>"
        },
        {
          "name": "hearing_inner_voice",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Like someone is reading the text to me (like listening)"
            },
            {
              "value": "2",
              "text": "Like reading the text out loud (like speaking)"
            },
            {
              "value": "3",
              "text": "Both like listening and speaking"
            },
            {
              "value": "4",
              "text": "Neither like listening nor like speaking"
            },
            {
              "value": "5",
              "text": "Unsure"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    /*{
      "name": "material_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "material_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">On which occasions do you usually hear an inner voice while reading? (Select all that apply — “When I read…”)</div>"
        },
        {
          "name": "material_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "Print books"
            },
            {
              "value": "2",
              "text": "Print magazines, journals or newspapers"
            },
            {
              "value": "3",
              "text": "Internet content such as blogs"
            },
            {
              "value": "4",
              "text": "Social network posts"
            },
            {
              "value": "5",
              "text": "Emails or text messages"
            },
            {
              "value": "6",
              "text": "Printed or handwritten letters or notes"
            },
            {
              "value": "7",
              "text": "Signs on walls or shop windows"
            },
            {
              "value": "8",
              "text": "Labels on food containers, medicine bottles or other products"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    }, */
    {
      "name": "situations_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "situations_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">In which situations are you more likely to hear an inner voice while reading? (Select all that apply.)</div>"
        },
        {
          "name": "situations_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "difficult",
              "text": "When the text is difficult or complex"
            },
            {
              "value": "nonnative",
              "text": "When I read in a language that isn’t my native language"
            },
            {
              "value": "concentrate",
              "text": "When I concentrate or give the text my full attention"
            },
            {
              "value": "slow",
              "text": "When I read slowly or carefully"
            },
            {
              "value": "emotional",
              "text": "When the content is emotional or engaging"
            },
            {
              "value": "remember",
              "text": "When I want to understand or remember something important"
            },
            {
              "value": "proofreading",
              "text": "When I proofread or check what I (or someone else) wrote"
            }
          ],
          "showOtherItem": true,
          "otherText": "Other (please specify)",
          "showNoneItem": true,
          "noneText": "No particular situation",
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "whose_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "whose_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Whose voice do you hear as you read? (Select all that apply.)</div>"
        },
        {
          "name": "whose_voice_reading",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "My own voice as I would hear it internally if I were speaking aloud"
            },
            {
              "value": "2",
              "text": "My own voice as others hear it when I speak aloud (e.g. a recording of my voice)"
            },
            {
              "value": "3",
              "text": "A story character"
            },
            {
              "value": "4",
              "text": "A celebrity or famous person (e.g. an actor who played the book character in a movie or TV show)"
            },
            {
              "value": "5",
              "text": "A family member (including by marriage)"
            },
            {
              "value": "6",
              "text": "A friend"
            },
            {
              "value": "7",
              "text": "Whoever sent the text, email or note"
            },
            {
              "value": "8",
              "text": "A teacher or acquaintance"
            },
            {
              "value": "9",
              "text": "A familiar voice I can’t identify"
            },
            {
              "value": "10",
              "text": "An unfamiliar voice (no one in particular)"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "different_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "different_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Over the course of your reading life, how many different inner voices have you heard?</div>"
        },
        {
          "name": "different_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Just one — I always hear the same inner voice when I read"
            },
            {
              "value": "2",
              "text": "Two — I hear one of two distinct voices, depending on the situation"
            },
            {
              "value": "3",
              "text": "A few — several different voices, depending on what or how I read"
            },
            {
              "value": "4",
              "text": "Many — the voice varies widely across my reading"
            },
            /* {
              "value": "5",
              "text": "Unsure / I've never paid attention to this"
            } */
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "voice_qualities",
      "elements": [
        {
          "type": "html",
          "name": "voice_qualities_q",
          "html": "<div class=\"pt-prompt\">How would you characterize each of these qualities of your inner reading voice?</div>"
        },
        {
          "name": "voice_qualities",
          "titleLocation": "hidden",
          "type": "matrix",
          "isAllRowRequired": true,
          "columns": [
            {
              "value": "same",
              "text": "Same as my own voice"
            },
            {
              "value": "different",
              "text": "Different from my own voice"
            },
            {
              "value": "varies",
              "text": "It varies depending on what I read"
            },
            {
              "value": "cant",
              "text": "I can't tell"
            }
          ],
          "rows": [
            {
              "value": "gender",
              "text": "Gender"
            },
            {
              "value": "accent",
              "text": "Accent"
            },
            {
              "value": "pitch",
              "text": "Pitch"
            },
            {
              "value": "loudness",
              "text": "Loudness"
            }
          ]
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "emotional_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "emotional_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">How would you characterize the emotional tone of your inner reading voice(s)?</div>"
        },
        {
          "name": "emotional_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "The same tone is always present, whatever I read"
            },
            {
              "value": "2",
              "text": "It varies (by voice or by what I read)"
            },
            {
              "value": "3",
              "text": "I can’t tell"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "change_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "change_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Can you change one or more qualities of your inner reading voice(s) when you want to?</div>"
        },
        {
          "name": "change_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Yes"
            },
            {
              "value": "2",
              "text": "No"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "quality_change_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "quality_change_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Which of these can you change at will? (Select all that apply.)</div>"
        },
        {
          "name": "quality_change_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "Whether I hear it at all"
            },
            {
              "value": "2",
              "text": "Whose voice I hear"
            },
            {
              "value": "3",
              "text": "The pitch"
            },
            {
              "value": "4",
              "text": "The accent"
            },
            {
              "value": "5",
              "text": "The loudness"
            },
            {
              "value": "6",
              "text": "The emotional tone"
            },
            {
              "value": "7",
              "text": "The reading speed"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1' and {change_inner_voice_reading} <> '2'"
    },
    {
      "name": "having_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "having_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Do you think that having an inner reading voice adds to your reading experience (e.g makes it more vivid, engaging, interesting, fun, etc.)?</div>"
        },
        {
          "name": "having_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Yes"
            },
            {
              "value": "2",
              "text": "No"
            },
            /*{
              "value": "3",
              "text": "I am not sure how to answer this question"
            } */
          ],
          "isRequired": true
        },
        {
          "type": "html",
          "name": "explain_having_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Please explain your choice</div>"
        },
        {
          "name": "explain_having_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "comment",
          "isRequired": true
        }
      ],
      "visibleIf": "{hearing_inner_voice_reading} <> '1'"
    },
    {
      "name": "harder_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "harder_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Do you think that having an inner reading voice makes reading harder (e.g. makes it slower, distracts you, etc.)?</div>"
        },
        {
          "name": "harder_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Yes"
            },
            {
              "value": "2",
              "text": "No"
            },
            {
              "value": "3",
              "text": "The opposite, it makes reading easier"
            },
            /*{
              "value": "4",
              "text": "I am not sure how to answer this question"
            } */
          ],
          "isRequired": true
        },
        {
          "type": "html",
          "name": "explain_harder_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">Please explain your choice</div>"
        },
        {
          "name": "explain_harder_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "comment",
          "isRequired": true
        }
      ],
      "visibleIf": "not ({spr_inner_voice} = '1' and {survey_inner_voice} = '1' and {hearing_inner_voice_reading} = '1')"
    },
    {
      "name": "most_people_inner_voice_reading",
      "elements": [
        {
          "type": "html",
          "name": "most_people_inner_voice_reading_q",
          "html": "<div class=\"pt-prompt\">In your personal opinion, do most people have an inner reading voice?</div>"
        },
        {
          "name": "most_people_inner_voice_reading",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Yes"
            },
            {
              "value": "2",
              "text": "No"
            },
            {
              "value": "3",
              "text": "Unsure"
            }
          ],
          "isRequired": true
        }
      ],
      "visibleIf": "not ({spr_inner_voice} = '1' and {survey_inner_voice} = '1' and {hearing_inner_voice_reading} = '1')"
    }
  ]
};
  return [ IVQ.makeSurvey(survey_json, { part: "part3" }) ];
};
