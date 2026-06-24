/* Part 4 — Inner speech during diverse text types
   SurveyJS survey — edit questions here. Re-run nothing; this IS the source.
 */
window.IVQ = window.IVQ || {};
IVQ.parts.part4 = function (jsPsych) {
  const survey_json = {
  "showQuestionNumbers": "off",
  "showPrevButton": true,
  "showProgressBar": "off",
  "pageNextText": "Next",
  "pagePrevText": "Previous",
  "completeText": "Continue",
  "pages": [
    {
      "name": "alphabet",
      "elements": [
        {
          "type": "html",
          "name": "alphabet_q",
          "html": "<div class=\"pt-prompt\">Please read the following: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.<br> While reading this, did you</div>"
        },
        {
          "name": "alphabet",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Hear\\say the letters' names in your head"
            },
            {
              "value": "2",
              "text": "Hear the letters' sounds (as phonemes) in your head"
            },
            {
              "value": "3",
              "text": "Hear\\sing the alphabet (A, B, C) song"
            },
            {
              "value": "4",
              "text": "Not hear an inner voice, understood the text without hearing anything in your head"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "happy_birthday",
      "elements": [
        {
          "type": "html",
          "name": "happy_birthday_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> Happy birthday to you<br> Happy birthday to you<br> Happy birthday, dear Emily<br> Happy birthday to you<br> While reading this, did you</div>"
        },
        {
          "name": "happy_birthday",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Hear\\Sing the Happy Birthday song in your head"
            },
            {
              "value": "2",
              "text": "Hear\\say the words in your head"
            },
            {
              "value": "3",
              "text": "Not hear an inner voice, understood the words without hearing anything in your head"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "twinkle_twinkle",
      "elements": [
        {
          "type": "html",
          "name": "twinkle_twinkle_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> Twinkle, twinkle little star.<br> How I wonder what you are.<br> Up above the world so high.<br> Like a diamond in the sky.<br> Twinkle, twinkle little star.<br> How I wonder what you are.<br> While reading this, did you</div>"
        },
        {
          "name": "twinkle_twinkle",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Hear\\Sing the Twinkle, Twinkle Little Star song in your head"
            },
            {
              "value": "2",
              "text": "Hear\\say the words in your head"
            },
            {
              "value": "3",
              "text": "Not hear an inner voice, understood the words without hearing anything in your head"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "harry_potter_book",
      "elements": [
        {
          "type": "html",
          "name": "harry_potter_book_q",
          "html": "<div class=\"pt-prompt\">Have you read the Harry Potter novels?</div>"
        },
        {
          "name": "harry_potter_book",
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
        },
        {
          "type": "html",
          "name": "harry_potter_audio_book_q",
          "html": "<div class=\"pt-prompt\">Have you listened to the Harry Potter audio books?</div>"
        },
        {
          "name": "harry_potter_audio_book",
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
        },
        {
          "type": "html",
          "name": "harry_potter_movie_q",
          "html": "<div class=\"pt-prompt\">Have you watched the Harry Potter movies?</div>"
        },
        {
          "name": "harry_potter_movie",
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
        },
        {
          "type": "html",
          "name": "harry_potter_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> “Wingardium Leviosa!” he shouted, waving his long arms like a windmill.<br> “You’re saying it wrong,” Harry heard Hermione snap. “It’s Wing-gar-dium Levi-o-sa, make the ‘gar’ nice and long.”<br> “You do it, then, if you’re so clever,” Ron snarled.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "harry_potter",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I only heard the characters' sayings in my head and understood the narration without hearing it in my head"
            },
            {
              "value": "4",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "5",
              "text": "I heard all the words in a general narrator voice"
            },
            {
              "value": "6",
              "text": "I heard the characters' sayings in the characters' voices (different voice for each character)"
            },
            {
              "value": "7",
              "text": "I heard only the narration parts in a general narrator voice"
            },
            {
              "value": "8",
              "text": "I heard only the narration parts in my own voice"
            },
            {
              "value": "9",
              "text": "The characters' voices that I hear in my head resemble the actors' voices that portray them in the movie"
            },
            {
              "value": "10",
              "text": "The characters' accents are similar to my own accent"
            },
            {
              "value": "11",
              "text": "The characters' accents are different from my own accent"
            },
            {
              "value": "12",
              "text": "The characters sound British in my head"
            },
            {
              "value": "13",
              "text": "The gender of the voice(s) I hear in my head is similar to my own gender"
            },
            {
              "value": "14",
              "text": "The gender of the voice(s) I hear in my head changes according to the characters' gender"
            },
            {
              "value": "15",
              "text": "The gender of the narrator's voice I hear in my head is similar to my own gender"
            },
            {
              "value": "16",
              "text": "I heard “Wingardium Leviosa!” at a different volume level in my head"
            },
            {
              "value": "17",
              "text": "I heard “Wingardium Leviosa!” as a shout in my head"
            },
            {
              "value": "18",
              "text": "I heard “Wingardium Leviosa!” at a normal speaking level volume in my head"
            },
            {
              "value": "20",
              "text": "I see the scenario in my head in pictures"
            },
            {
              "value": "21",
              "text": "I see the scenario in my head like a movie"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words in my head (please specify which words)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "harry_potter_youtube",
      "elements": [
        {
          "type": "html",
          "name": "harry_potter_youtube_h",
          "html": "<div class=\"pt-prompt\">Please watch the following video</div><div class=\"pt-video\"><video controls preload=\"metadata\" src=\"stimuli/media/harry_potter.mp4\"></video></div>"
        },
        {
          "type": "html",
          "name": "harry_potter_scene_q",
          "html": "<div class=\"pt-prompt\">Check all that apply.</div>"
        },
        {
          "name": "harry_potter_scene",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "The voices of the actors in the video were the same as the voices I heard in my head while reading"
            },
            {
              "value": "2",
              "text": "The voices of the actors in the video were different from the voices I heard in my head while reading"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "harry_potter_2",
      "elements": [
        {
          "type": "html",
          "name": "harry_potter_2_q",
          "html": "<div class=\"pt-prompt\">Please read again the following:<br> “Wingardium Leviosa!” he shouted, waving his long arms like a windmill.<br> “You’re saying it wrong,” Harry heard Hermione snap. “It’s Wing-gar-dium Levi-o-sa, make the ‘gar’ nice and long.”<br> “You do it, then, if you’re so clever,” Ron snarled.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "harry_potter_2",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I only heard the characters' sayings in my head and understood the narration without hearing it in my head"
            },
            {
              "value": "4",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "5",
              "text": "I heard all the words in a general narrator voice"
            },
            {
              "value": "6",
              "text": "I heard the characters' sayings in the characters' voices (different voice for each character)"
            },
            {
              "value": "7",
              "text": "I heard only the narration parts in a general narrator voice"
            },
            {
              "value": "8",
              "text": "I heard only the narration parts in my own voice"
            },
            {
              "value": "9",
              "text": "The characters' voices that I hear in my head resemble the actors' voices that portray them in the movie"
            },
            {
              "value": "10",
              "text": "The characters' accents are similar to my own accent"
            },
            {
              "value": "11",
              "text": "The characters' accents are different from my own accent"
            },
            {
              "value": "12",
              "text": "The characters sound British in my head"
            },
            {
              "value": "13",
              "text": "The gender of the voice(s) I hear in my head is similar to my own gender"
            },
            {
              "value": "14",
              "text": "The gender of the voice(s) I hear in my head changes according to the characters' gender"
            },
            {
              "value": "15",
              "text": "The gender of the narrator's voice I hear in my head is similar to my own gender"
            },
            {
              "value": "16",
              "text": "I heard “Wingardium Leviosa!” at a different volume level in my head"
            },
            {
              "value": "17",
              "text": "I heard “Wingardium Leviosa!” as a shout in my head"
            },
            {
              "value": "18",
              "text": "I heard “Wingardium Leviosa!” at a normal speaking level volume in my head"
            },
            {
              "value": "20",
              "text": "I see the scenario in my head in pictures"
            },
            {
              "value": "21",
              "text": "I see the scenario in my head like a movie"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words in my head (please specify which words)",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "harry_potter_2_diff_q",
          "html": "<div class=\"pt-prompt\">Did you notice any differences between your first and second readings of the text? If so, what were they?</div>"
        },
        {
          "name": "harry_potter_2_diff",
          "titleLocation": "hidden",
          "type": "comment",
          "isRequired": true
        }
      ]
    },
    {
      "name": "sherlock_holmes",
      "elements": [
        {
          "type": "html",
          "name": "sherlock_holmes_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> \"We came here on business,\" said Stamford, sitting down on a high three-legged stool, and pushing another one in my direction with his foot. \"My friend here, Dr. Watson, wants to take diggings; and as you were complaining that you could get no one to go halves with you, I thought that I had better bring you together.\"<br> Sherlock Holmes seemed delighted at the idea of sharing his rooms with me. \"I have my eye on a suite in Baker Street,\" he said, \"which would suit us down to the ground. You don't mind the smell of strong tobacco, I hope?\"<br> \"I always smoke 'ship's' myself,\" I answered.<br> \"That's good enough. I generally have chemicals about, and occasionally do experiments. Would that annoy you?\"<br> \"By no means.\"<br> Check all that apply. While reading</div>"
        },
        {
          "name": "sherlock_holmes",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I only heard the characters' sayings in my head and understood the narration without hearing it in my head"
            },
            {
              "value": "4",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "5",
              "text": "I heard all the words in a general narrator voice"
            },
            {
              "value": "6",
              "text": "I heard the characters' sayings in the characters' voices (different voice for each character)"
            },
            {
              "value": "7",
              "text": "I heard only the narration parts in a general narrator voice"
            },
            {
              "value": "8",
              "text": "I heard only the narration parts in my own voice"
            },
            {
              "value": "9",
              "text": "The characters' voices that I hear in my head resemble the actors' voices that portray them in the movie\\ TV series"
            },
            {
              "value": "10",
              "text": "The characters' accents are similar to my own accent"
            },
            {
              "value": "11",
              "text": "The characters' accents are different from my own accent"
            },
            {
              "value": "12",
              "text": "The characters sound British in my head"
            },
            {
              "value": "13",
              "text": "The gender of the voice(s) I hear in my head is similar to my own gender"
            },
            {
              "value": "14",
              "text": "The gender of the voice(s) I hear in my head are all male"
            },
            {
              "value": "15",
              "text": "The gender of the characters' voices is male and the gender of the narrator's voice is similar to my own gender"
            },
            {
              "value": "16",
              "text": "I see the scenario in my head in pictures"
            },
            {
              "value": "17",
              "text": "I see the scenario in my head like a movie"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words in my head (please specify which words)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "winnie_the_pooh",
      "elements": [
        {
          "type": "html",
          "name": "winnie_the_pooh_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> So Winnie-the-Pooh went round to his friend Christopher Robin, who lived behind a green door in another part of the forest.<br> \"Good morning, Christopher Robin,\" he said.<br> \"Good morning, Winnie-the-Pooh,\" said you.<br> \"I wonder if you've got such a thing as a balloon about you?\"<br> \"A balloon?\"<br> \"Yes, I just said to myself coming along: 'I wonder if Christopher Robin has such a thing as a balloon about him?' I just said it to myself, thinking of balloons, and wondering.\"<br> \"What do you want a balloon for?\" you said.<br> Winnie-the-Pooh looked round to see that nobody was listening, put his paw to his mouth, and said in a deep whisper: \"Honey!\"<br> Check all that apply. While reading</div>"
        },
        {
          "name": "winnie_the_pooh",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I only heard the characters' sayings in my head and understood the narration without hearing it in my head"
            },
            {
              "value": "4",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "5",
              "text": "I heard all the words in a general narrator voice"
            },
            {
              "value": "6",
              "text": "I heard the characters' sayings in the characters' voices (different voice for each character)"
            },
            {
              "value": "7",
              "text": "I heard only the narration parts in a general narrator voice"
            },
            {
              "value": "8",
              "text": "I heard only the narration parts in my own voice"
            },
            {
              "value": "9",
              "text": "The characters' accents are similar to my own accent"
            },
            {
              "value": "10",
              "text": "The characters' accents are different from my own accent"
            },
            {
              "value": "11",
              "text": "The gender of the voice(s) I hear in my head is similar to my own gender"
            },
            {
              "value": "12",
              "text": "The gender of the voice(s) I hear in my head are all male"
            },
            {
              "value": "13",
              "text": "The gender of the characters' voices is male and the gender of the narrator's voice is similar to my own gender"
            },
            {
              "value": "14",
              "text": "Winnie-the-Pooh voice in my head sounds the same as a human voice"
            },
            {
              "value": "16",
              "text": "I heard \"Honey!\" at a different volume level in my head"
            },
            {
              "value": "17",
              "text": "I heard \"Honey!\" as a whisper in my head"
            },
            {
              "value": "18",
              "text": "I heard \"Honey!\" at a normal speaking level volume in my head"
            },
            {
              "value": "20",
              "text": "I see the scenario in my head in pictures"
            },
            {
              "value": "21",
              "text": "I see the scenario in my head like a movie"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words in my head (please specify which words)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "genesis",
      "elements": [
        {
          "type": "html",
          "name": "genesis_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> [1:1] In the beginning when God created the heavens and the earth,<br> [1:2] the earth was a formless void and darkness covered the face of the deep, while a wind from God swept over the face of the waters.<br> [1:3] Then God said, \"Let there be light\"; and there was light.<br> [1:4] And God saw that the light was good; and God separated the light from the darkness.<br> [1:5] God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "genesis",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I only heard God's voice in \"Let there be light\" in my head and understood the narration without hearing it in my head"
            },
            {
              "value": "4",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "5",
              "text": "I heard all the words in a general narrator voice"
            },
            {
              "value": "6",
              "text": "I heard only the narration parts in a general narrator voice"
            },
            {
              "value": "7",
              "text": "I heard only the narration parts in my own voice"
            },
            {
              "value": "8",
              "text": "The accent of the voice(s) I hear in my head is similar to my own accent"
            },
            {
              "value": "9",
              "text": "The accent of the voice(s) I hear in my head is different from my own accent"
            },
            {
              "value": "10",
              "text": "The gender of the voice(s) I hear in my head is similar to my own gender"
            },
            {
              "value": "11",
              "text": "The gender of the voice(s) I hear in my head is different than my own gender"
            },
            {
              "value": "12",
              "text": "God's voice in my head sounds the same as a human voice"
            },
            {
              "value": "14",
              "text": "I see the scenario in my head in pictures"
            },
            {
              "value": "15",
              "text": "I see the scenario in my head like a movie"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words in my head (please specify which words)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "non_words",
      "elements": [
        {
          "type": "html",
          "name": "non_words_q",
          "html": "<div class=\"pt-prompt\">Please read the following:<br> THI SPLANKLERS RURNED EM APRILORICALLY ELFBY ERTFING FOT REMORTLY SOTHCLING MUP BROLEN<br> Check all that apply. While reading</div>"
        },
        {
          "name": "non_words",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "3",
              "text": "I heard all the words in a general voice"
            },
            {
              "value": "4",
              "text": "I did not hear any voice in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "trump_tweet",
      "elements": [
        {
          "type": "html",
          "name": "trump_tweet_q",
          "html": "<div class=\"pt-media\"><img src=\"stimuli/media/trump_tweet.png\" alt=\"stimulus image\"></div><div class=\"pt-prompt\">Please read the text above.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "trump_tweet",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I only heard the tweets' content in my head and understood the text above (user handle) and below it (date) without hearing it in my head"
            },
            {
              "value": "4",
              "text": "I heard all the words in a general, non-specific voice"
            },
            {
              "value": "5",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "6",
              "text": "I heard the tweets' content in trumps' voice"
            },
            {
              "value": "7",
              "text": "I heard the text above (user handle) and below it (date) in my own voice"
            },
            {
              "value": "8",
              "text": "I heard the tweets' content in my own voice"
            },
            {
              "value": "9",
              "text": "The accent of the voice I hear in my head is similar to my own accent"
            },
            {
              "value": "10",
              "text": "The gender of the voice I hear in my head is similar to my own gender"
            },
            {
              "value": "14",
              "text": "I heard \"@nytimes\" as \"at New York Times\" in my head"
            },
            {
              "value": "15",
              "text": "I understood \"@nytimes\" without hearing it in my head"
            },
            {
              "value": "16",
              "text": "I heard \"@nytimes\" as it is written in my head"
            },
            {
              "value": "17",
              "text": "I heard \"@realDonaldTrump\" as \"at real Donald Trump\" in my head"
            },
            {
              "value": "18",
              "text": "I understood \"@realDonaldTrump\" without hearing it in my head"
            },
            {
              "value": "19",
              "text": "I heard \"@realDonaldTrump\" as it is written in my head"
            },
            {
              "value": "20",
              "text": "I heard \"7:34 PM Apr 11, 2020\" as \"seven thirty-four p.m., April eleventh, twenty twenty (or two thousand twenty)\" in my head"
            },
            {
              "value": "21",
              "text": "I understood \"7:34 PM Apr 11, 2020\" without hearing it in my head"
            },
            {
              "value": "22",
              "text": "I heard \"7:34 PM Apr 11, 2020\" as it is written in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words in my head (please specify which words)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "mom_text_1",
      "elements": [
        {
          "type": "html",
          "name": "mom_text_1_q",
          "html": "<div class=\"pt-media\"><img src=\"stimuli/media/mom_text_1.jpeg\" alt=\"stimulus image\"></div><div class=\"pt-prompt\">Please read the text above.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "mom_text_1",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I only heard one side of the correspondence content in my head and understood the other side without hearing it in my head"
            },
            {
              "value": "4",
              "text": "I heard all the words in the same general, non-specific voice"
            },
            {
              "value": "5",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "6",
              "text": "I heard each side of the correspondence in a different voice"
            },
            {
              "value": "7",
              "text": "I heard one side of the correspondence in my mom's voice and the other side in my own voice"
            },
            {
              "value": "8",
              "text": "I heard one side of the correspondence in a general, non-specific female voice and the other side in a general, non-specific male\\female voice"
            },
            {
              "value": "9",
              "text": "The accent of the voice(s) I hear in my head is similar to my own accent"
            },
            {
              "value": "10",
              "text": "I heard each side of the correspondence in a different accent"
            },
            {
              "value": "11",
              "text": "Only one side of the correspondence has a similar accent to my own in my head"
            },
            {
              "value": "12",
              "text": "I heard each side of the correspondence in a different accent"
            },
            {
              "value": "13",
              "text": "I heard both sides of the correspondence in the same accent"
            },
            {
              "value": "14",
              "text": "I heard each side of the correspondence in a different emotional tone"
            },
            {
              "value": "15",
              "text": "I heard both sides of the correspondence in the same emotional tone"
            },
            {
              "value": "16",
              "text": "I heard each side of the correspondence in a different volume level"
            },
            {
              "value": "17",
              "text": "I heard both sides of the correspondence at the same volume level"
            },
            {
              "value": "18",
              "text": "I understood \"WTF\" without hearing it in my head"
            },
            {
              "value": "19",
              "text": "I heard \"WTF\" as the names of the letters (\"W\", \"T\", \"F\") in my head"
            },
            {
              "value": "20",
              "text": "I heard \"WTF\" as \"What the F\" in my head"
            },
            {
              "value": "21",
              "text": "I heard \"WTF\" as \"What the Fuck\" in my head"
            },
            {
              "value": "22",
              "text": "I heard \"WTF\" as \"Well That's Fantastic\" in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words in my head (please specify which words)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "mom_text_2",
      "elements": [
        {
          "type": "html",
          "name": "mom_text_2_q",
          "html": "<div class=\"pt-media\"><img src=\"stimuli/media/mom_text_2.jpg\" alt=\"stimulus image\"></div><div class=\"pt-prompt\">Please read the text above.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "mom_text_2",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I only heard one side of the correspondence content in my head and understood the other side without hearing it in my head"
            },
            {
              "value": "4",
              "text": "I heard all the words in the same general, non-specific voice"
            },
            {
              "value": "5",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "6",
              "text": "I heard each side of the correspondence in a different voice"
            },
            {
              "value": "7",
              "text": "I heard one side of the correspondence in my mom's voice and the other side in my own voice"
            },
            {
              "value": "8",
              "text": "I heard one side of the correspondence in a general, non-specific female voice and the other side in a general, non-specific male voice"
            },
            {
              "value": "9",
              "text": "The accent of the voice(s) I hear in my head is similar to my own accent"
            },
            {
              "value": "10",
              "text": "I heard each side of the correspondence in a different accent"
            },
            {
              "value": "11",
              "text": "Only one side of the correspondence has a similar accent to my own in my head"
            },
            {
              "value": "12",
              "text": "I heard each side of the correspondence in a different accent"
            },
            {
              "value": "13",
              "text": "I heard both sides of the correspondence in the same accent"
            },
            {
              "value": "14",
              "text": "I heard each side of the correspondence in a different emotional tone"
            },
            {
              "value": "15",
              "text": "I heard both sides of the correspondence in the same emotional tone"
            },
            {
              "value": "16",
              "text": "I heard each side of the correspondence in a different volume level"
            },
            {
              "value": "17",
              "text": "I heard both sides of the correspondence at the same volume level"
            },
            {
              "value": "18",
              "text": "I understood \"LOL\" without hearing it in my head"
            },
            {
              "value": "19",
              "text": "I heard \"LOL\" as the names of the letters (\"L\", \"O\", \"L\") in my head"
            },
            {
              "value": "20",
              "text": "I heard \"LOL\" as it is written \"lol\" in my head"
            },
            {
              "value": "21",
              "text": "I heard \"LOL\" as \"laughing out loud\" in my head"
            },
            {
              "value": "22",
              "text": "I heard \"LOL\" as \"lots of love\" in my head"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words in my head (please specify which words)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "one_stop_qa_silent_reading",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard all the words in my head"
            },
            {
              "value": "2",
              "text": "I only heard the quote in my head and understood the rest without hearing it in my head"
            },
            {
              "value": "4",
              "text": "I heard all the words in my own voice"
            },
            {
              "value": "5",
              "text": "I heard all the words in a general, non-specific voice"
            },
            {
              "value": "6",
              "text": "I heard the quote in a different voice than the rest of the text"
            },
            {
              "value": "7",
              "text": "The voice accent that I heard in my head is similar to my own accent"
            },
            {
              "value": "8",
              "text": "The voice accent that I heard in my head is different from my own accent"
            },
            {
              "value": "9",
              "text": "The voice gender that I heard in my head is similar to my own gender"
            },
            {
              "value": "10",
              "text": "The voice gender that I heard in my head is different from my own gender"
            },
            {
              "value": "11",
              "text": "I see the scenario in my head like a movie"
            }
          ],
          "showOtherItem": true,
          "otherText": "I only heard some of the words in my head (please specify which words)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_q",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_q_q",
          "html": "<div class=\"pt-prompt\">According to Malik Falkenmark’s report, what will happen if the world adopts the current diet trends of western nations?</div>"
        },
        {
          "name": "one_stop_qa_q",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "There will not be sufficient water to grow enough food for everyone"
            },
            {
              "value": "2",
              "text": "By 2050, nine billion people will not have enough drinking water"
            },
            {
              "value": "3",
              "text": "By 2050, animal-based protein consumption will reduce from 20% to 5%"
            },
            {
              "value": "4",
              "text": "Obesity rates around the world will rise"
            }
          ],
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_gender",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_gender_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head with a different gender than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_gender",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "While reading, I heard a voice in my head saying the words the same way as the first time I read the paragraph."
            },
            {
              "value": "2",
              "text": "While reading, I heard a voice in my head saying the words and it had a different gender than the first time I read the paragraph. Only the voice's gender was different."
            },
            {
              "value": "3",
              "text": "While reading, I heard a voice in my head saying the words and it had a different gender than the first time I read the paragraph. Other features of the voice, like accent, pitch, loudness, speed and emotional tone, were different as well."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_accent",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_accent_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head with a different accent than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_accent",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "While reading, I heard a voice in my head saying the words the same way as the first time I read the paragraph."
            },
            {
              "value": "2",
              "text": "While reading, I heard a voice in my head saying the words and it had a different accent than the first time I read the paragraph. Only the voice's accent was different."
            },
            {
              "value": "3",
              "text": "While reading, I heard a voice in my head saying the words and it had a different accent than the first time I read the paragraph. Other features of the voice, like gender, pitch, loudness, speed and emotional tone, were different as well."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_pitch",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_pitch_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head with a lower or higher pitch than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_pitch",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "While reading, I heard a voice in my head saying the words the same way as the first time I read the paragraph."
            },
            {
              "value": "2",
              "text": "While reading, I heard a voice in my head saying the words and it had a different pitch than the first time I read the paragraph. Only the voice's pitch was different."
            },
            {
              "value": "3",
              "text": "While reading, I heard a voice in my head saying the words and it had a different pitch than the first time I read the paragraph. Other features of the voice, like gender, accent, loudness, speed and emotional tone, were different as well."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_speed",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_speed_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head faster or slower than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_speed",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "While reading, I heard a voice in my head saying the words the same way as the first time I read the paragraph."
            },
            {
              "value": "2",
              "text": "While reading, I heard a voice in my head saying the words and it had a different pace of reading than the first time I read the paragraph. Only the voice's speed was different."
            },
            {
              "value": "3",
              "text": "While reading, I heard a voice in my head saying the words and it had a different pace of reading than the first time I read the paragraph. Other features of the voice, like gender, accent, loudness, pitch and emotional tone, were different as well."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_loudness",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_loudness_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head louder (like a shout) or quieter (like a whisper) than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_loudness",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "While reading, I heard a voice in my head saying the words the same way as the first time I read the paragraph."
            },
            {
              "value": "2",
              "text": "While reading, I heard a voice in my head saying the words and it was louder or quieter than the first time I read the paragraph. Only the voice's loudness was different."
            },
            {
              "value": "3",
              "text": "While reading, I heard a voice in my head saying the words and it was louder or quieter than the first time I read the paragraph. Other features of the voice, like gender, accent, pitch, speed and emotional tone, were different as well."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_emotional_tone",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_emotional_tone_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head with a different intonation than the first time:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_emotional_tone",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "While reading, I heard a voice in my head saying the words the same way as the first time I read the paragraph."
            },
            {
              "value": "2",
              "text": "While reading, I heard a voice in my head saying the words and it had a different emotional tone than the first time I read the paragraph. Only the voice's intonation was different."
            },
            {
              "value": "3",
              "text": "While reading, I heard a voice in my head saying the words and it had a different emotional tone than the first time I read the paragraph. Other features of the voice, like gender, accent, loudness, speed and pitch, were different as well."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_silent_reading_friend",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_silent_reading_friend_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently again, but this time try to hear a voice saying the words in your head similar to a specific close friend or family member of yours:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.</div>"
        },
        {
          "name": "one_stop_qa_silent_reading_friend",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "While reading, I heard a voice in my head saying the words the same way as the first time I read the paragraph."
            },
            {
              "value": "2",
              "text": "While reading, I heard a voice in my head saying the words as if a specific close friend or family member were reading this paragraph to me."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_lips_moving",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_lips_moving_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph again, but this time move your lips as if to say the words aloud, but do not make any sound:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "one_stop_qa_lips_moving",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard the same voice in my head saying the words as the first time I read the paragraph."
            },
            {
              "value": "2",
              "text": "I heard my own voice saying the words in my head."
            },
            {
              "value": "3",
              "text": "It felt the same way as reading the paragraph silently."
            }
          ],
          "showOtherItem": true,
          "otherText": "It felt different from reading the paragraph silently (please specify in what way)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_aloud",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_aloud_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph again, but this time read it aloud:<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "one_stop_qa_aloud",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I did not hear a voice in my head."
            },
            {
              "value": "2",
              "text": "I heard the same voice in my head saying the words as the first time I read the paragraph."
            },
            {
              "value": "3",
              "text": "I heard my own voice saying the words in my head."
            },
            {
              "value": "4",
              "text": "It felt the same way as reading the paragraph silently."
            },
            {
              "value": "5",
              "text": "It felt the same way as reading the paragraph silently while moving my lips."
            }
          ],
          "showOtherItem": true,
          "otherText": "It felt different from reading the paragraph silently (please specify in what way)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_listening",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_listening_q",
          "html": "<div class=\"pt-media\"><audio controls preload=\"auto\" src=\"stimuli/media/Food-Shortages-Could-Force-World-into-Vegetarianism_p1.wav\"></audio></div><div class=\"pt-prompt\">Please play the sound of Amy reading the paragraph aloud and follow the text while you listen (read silently with her).<br> Leading water scientists have issued one of the sternest warnings yet about global food supplies, saying that the world’s population may have to switch almost completely to a vegetarian diet by 2050 to avoid catastrophic shortages. Humans derive about 20% of their protein from animal-based products now, but this may need to drop to just 5% to feed the extra two billion people expected to be alive by 2050, according to research by some of the world’s leading water scientists. “There will not be enough water available on current croplands to produce food for the expected nine-billion population in 2050 if we follow current trends and changes towards diets common in western nations,” the report by Malik Falkenmark and colleagues at the Stockholm International Water Institute (SIWI) said.<br> Check all that apply.</div>"
        },
        {
          "name": "one_stop_qa_listening",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I did not hear a voice in my head while listening."
            },
            {
              "value": "3",
              "text": "Amy's voice is similar to the voice I heard in my head when I read the paragraph silently."
            },
            {
              "value": "4",
              "text": "Amy's voice is different from the voice I heard in my head when I read the paragraph silently."
            },
            {
              "value": "5",
              "text": "The voice I heard in my head while reading the paragraph silently has the same gender as Amy's voice."
            },
            {
              "value": "6",
              "text": "The voice I heard in my head while reading the paragraph silently has a different gender than Amy's voice."
            },
            {
              "value": "7",
              "text": "The voice I heard in my head while reading the paragraph silently has the same accent as Amy's voice."
            },
            {
              "value": "8",
              "text": "The voice I heard in my head while reading the paragraph silently has a different accent than Amy's voice."
            },
            {
              "value": "9",
              "text": "The voice I heard in my head while reading the paragraph silently has the same reading speed as Amy's."
            },
            {
              "value": "10",
              "text": "The voice I heard in my head while reading the paragraph silently has a different reading speed from Amy's."
            },
            {
              "value": "11",
              "text": "The voice's pitch I heard in my head while reading the paragraph silently is similar to Amy's pitch."
            },
            {
              "value": "12",
              "text": "The voice's pitch I heard in my head while reading the paragraph silently is different from Amy's pitch."
            },
            {
              "value": "13",
              "text": "The voice's emotional tone I heard in my head while reading the paragraph silently is similar to Amy's emotional tone."
            },
            {
              "value": "14",
              "text": "The voice's emotional tone I heard in my head while reading the paragraph silently is different from Amy's emotional tone."
            }
          ],
          "showOtherItem": true,
          "otherText": "I heard a voice in my head while listening (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_2",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_2_q",
          "html": "<div class=\"pt-prompt\">Please read the following paragraph silently. Try to hear as if Amy is reading the words to you.<br> “There will be just enough water if the proportion of animal-based foods is limited to 5% of total calories and considerable regional water deficits can be met by a reliable system of food trade.” Dire warnings of water scarcity limiting food production come as Oxfam and the UN prepare for a possible second global food crisis in five years. Prices for staples such as corn and wheat have risen nearly 50% on international markets since June, triggered by severe droughts in the US and Russia, and weak monsoon rains in Asia. More than 18 million people are already facing serious food shortages across the Sahel. Oxfam has forecast that the price spike will have a devastating impact in developing countries that rely heavily on food imports, including parts of Latin America, North Africa and the Middle East. Food shortages in 2008 led to civil unrest in 28 countries.<br> Check all that apply. While reading</div>"
        },
        {
          "name": "one_stop_qa_2",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I heard a voice in my head saying the words the same way as the first time I read the paragraph."
            },
            {
              "value": "2",
              "text": "I heard all the words in my own voice."
            },
            {
              "value": "3",
              "text": "I heard a voice in my head saying the words as if a Amy was reading this paragraph to me."
            },
            {
              "value": "4",
              "text": "The voice's accent I heard in my head is similar to my own accent."
            },
            {
              "value": "5",
              "text": "The voice's accent I heard in my head is similar to Amy's accent."
            },
            {
              "value": "6",
              "text": "The voice's accent I heard in my head has neither my accent nor Amy's."
            },
            {
              "value": "7",
              "text": "The voice's gender I heard in my head is similar to my own gender."
            },
            {
              "value": "8",
              "text": "The voice's gender I heard in my head is similar to Amy's gender."
            },
            {
              "value": "9",
              "text": "The voice's gender I heard in my head has a different gender than Amy's and mine."
            },
            {
              "value": "10",
              "text": "The voice I heard in my head has the same loudness as Amy's voice."
            },
            {
              "value": "11",
              "text": "The voice I heard in my head has a different loudness than Amy's voice."
            },
            {
              "value": "12",
              "text": "The voice I heard in my head has the same reading speed as Amy's."
            },
            {
              "value": "13",
              "text": "The voice's pitch I heard in my head is similar to Amy's pitch."
            },
            {
              "value": "14",
              "text": "The voice's pitch I heard in my head is similar to my own pitch."
            },
            {
              "value": "15",
              "text": "The voice's pitch I heard in my head has a different pitch than Amy's and mine."
            },
            {
              "value": "16",
              "text": "The voice I heard in my head has the same emotional tone as Amy's voice."
            },
            {
              "value": "17",
              "text": "The voice I heard in my head has a different emotional tone than Amy's voice."
            }
          ],
          "showOtherItem": true,
          "otherText": "other (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_2_listening",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_2_listening_q",
          "html": "<div class=\"pt-media\"><audio controls preload=\"auto\" src=\"stimuli/media/Food-Shortages-Could-Force-World-into-Vegetarianism_p2.wav\"></audio></div><div class=\"pt-prompt\">Please play the sound of Amy reading the paragraph aloud and follow the text while you listen (read silently with her).<br> “There will be just enough water if the proportion of animal-based foods is limited to 5% of total calories and considerable regional water deficits can be met by a reliable system of food trade.” Dire warnings of water scarcity limiting food production come as Oxfam and the UN prepare for a possible second global food crisis in five years. Prices for staples such as corn and wheat have risen nearly 50% on international markets since June, triggered by severe droughts in the US and Russia, and weak monsoon rains in Asia. More than 18 million people are already facing serious food shortages across the Sahel. Oxfam has forecast that the price spike will have a devastating impact in developing countries that rely heavily on food imports, including parts of Latin America, North Africa and the Middle East. Food shortages in 2008 led to civil unrest in 28 countries.<br> Check all that apply.</div>"
        },
        {
          "name": "one_stop_qa_2_listening",
          "titleLocation": "hidden",
          "type": "checkbox",
          "choices": [
            {
              "value": "1",
              "text": "I did not hear a voice in my head while listening."
            },
            {
              "value": "3",
              "text": "Amy's voice is similar to the voice I heard in my head when I read the paragraph silently."
            },
            {
              "value": "4",
              "text": "Amy's voice is different from the voice I heard in my head when I read the paragraph silently."
            },
            {
              "value": "5",
              "text": "The voice I heard in my head while reading the paragraph silently has the same gender as Amy's voice."
            },
            {
              "value": "6",
              "text": "The voice I heard in my head while reading the paragraph silently has a different gender than Amy's voice."
            },
            {
              "value": "7",
              "text": "The voice I heard in my head while reading the paragraph silently has the same accent as Amy's voice."
            },
            {
              "value": "8",
              "text": "The voice I heard in my head while reading the paragraph silently has a different accent than Amy's voice."
            },
            {
              "value": "9",
              "text": "The voice I heard in my head while reading the paragraph silently has the same reading speed as Amy's."
            },
            {
              "value": "10",
              "text": "The voice I heard in my head while reading the paragraph silently has a different reading speed from Amy's."
            },
            {
              "value": "11",
              "text": "The voice's pitch I heard in my head while reading the paragraph silently is similar to Amy's pitch."
            },
            {
              "value": "12",
              "text": "The voice's pitch I heard in my head while reading the paragraph silently is different from Amy's pitch."
            },
            {
              "value": "13",
              "text": "The voice's emotional tone I heard in my head while reading the paragraph silently is similar to Amy's emotional tone."
            },
            {
              "value": "14",
              "text": "The voice's emotional tone I heard in my head while reading the paragraph silently is different from Amy's emotional tone."
            }
          ],
          "showOtherItem": true,
          "otherText": "I heard a voice in my head while listening (please specify)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "one_stop_qa_2_q",
      "elements": [
        {
          "type": "html",
          "name": "one_stop_qa_2_q_q",
          "html": "<div class=\"pt-prompt\">Which factor led to the increase in the price of corn and wheat?</div>"
        },
        {
          "name": "one_stop_qa_2_q",
          "titleLocation": "hidden",
          "type": "radiogroup",
          "choices": [
            {
              "value": "1",
              "text": "Unfavorable weather conditions in different locations around the globe"
            },
            {
              "value": "2",
              "text": "Instability of the international financial markets"
            },
            {
              "value": "3",
              "text": "Warnings of water scarcity by Oxfam and the UN"
            },
            {
              "value": "4",
              "text": "Global warming"
            }
          ],
          "isRequired": true
        }
      ]
    }
  ]
};
  return [ IVQ.makeSurvey(survey_json, { part: "part4" }) ];
};
