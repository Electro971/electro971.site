function printOut()
{
	var size = document.getElementById("fsize").value;
	
	document.getElementById("output").style.fontSize = size+"px";
	
	document.getElementById("output").innerHTML = "+++INCOMING TRANSMISSION+++<br>";
	
	var transmitted = document.getElementById("transmitted").value;	
	document.getElementById("output").innerHTML += "+++TRANSMITTED: ";
	document.getElementById("output").innerHTML += transmitted;
	document.getElementById("output").innerHTML += "<br>";
	
	var recieved = document.getElementById("recieved").value;	
	document.getElementById("output").innerHTML += "++++++RECIEVED: ";
	document.getElementById("output").innerHTML += recieved;
	document.getElementById("output").innerHTML += "<br>";
	
	var date = document.getElementById("date").value;	
	document.getElementById("output").innerHTML += "++++++++++DATE: ";
	document.getElementById("output").innerHTML += date;
	document.getElementById("output").innerHTML += "<br>";
	
	var ref = document.getElementById("ref").value;	
	document.getElementById("output").innerHTML += "+++++++++++REF: ";
	document.getElementById("output").innerHTML += ref;
	document.getElementById("output").innerHTML += "<br>";
	
	var author = document.getElementById("author").value;	
	document.getElementById("output").innerHTML += "++++++++AUTHOR: ";
	document.getElementById("output").innerHTML += author;
	document.getElementById("output").innerHTML += "<br>";
	
	var subj = document.getElementById("subj").value;	
	document.getElementById("output").innerHTML += "+++++++SUBJECT: ";
	document.getElementById("output").innerHTML += subj;
	document.getElementById("output").innerHTML += "<br>";
	
	var main = document.getElementById("main").value;	
	document.getElementById("output").innerHTML += "+++TRANSMISSION CONTENT FOLLOWS+++<br><br>";
	document.getElementById("output").innerHTML += main;
	document.getElementById("output").innerHTML += "<br>";
	
	var thought = document.getElementById("thought").value;	
	document.getElementById("output").innerHTML += "<br>";
	document.getElementById("output").innerHTML += "+++THOUGHT: ";
	document.getElementById("output").innerHTML += thought;
	document.getElementById("output").innerHTML += "<br>";
	document.getElementById("output").innerHTML += "+++TRANSMISSION END+++";
}

function randomThought()
{
	const thoughts = ["A broad mind lacks focus.",
	"A coward always seeks compromise.",
	"A coward’s only reward is to live in fear another day.",
	"A dedicated life may reach the end of infinity.",
	"A fine mind is a blessing of the Emperor - It should not be cluttered with trivialities.",
	"A good soldier obeys without question. A good officer commands without doubt.",
	"A hundred thousand worlds, ten hundred thousand wars. There is no respite, there is nowhere to hide. Across the galaxy there is only war.",
	"A logical argument must be dismissed with absolute conviction!",
	"A man subjected to an alien is no man at all.",
	"A mind without purpose will wander in dark places.",
	"A moment of laxity spawns a lifetime of heresy.",
	"A questioning mind betrays a treacherous soul.",
	"A questioning servant is more dangerous than an ignorant heretic.",
	"A single thought of heresy can blight a lifetime of faithful duty.",
	"A small mind is a tidy mind.",
	"A small mind is easily filled with faith.",
	"A suspicious mind is a healthy mind.",
	"A warrior's faith in his commander is his best armour and his strongest weapon.",
	"A weapon cannot substitute for zeal.",
	"A wise man learns from the death of others.",
	"Abhor the Night, it is the Light that Endures!",
	"Accept your lot!",
	"Across the void of space men live as they have lived for millennia upon the sand, rock and soil of worlds bathed in the light of alien suns. So is Humanity's seed cast far and wide beyond the knowledge of Man, to thrive bitterly in the darkness, to take root and cling with robust and savage determination.",
	"Adamantium walls and plasteel bulkheads may seem formidable, but an unshakeable faith in the Immortal Emperor of Man can overcome any barriers.",
	"Against the Alien and the Traitor there is no fair way to fight.",
	"All Daemons are Falsehood. They are lies given the shape of creatures by the fell power of Chaos.",
	"All hail the martyrs! On their blood is our Imperium founded, in their remembrance do we honour ourselves.",
	"All mortal life is folly that does not feed the spirit.",
	"All our ignorances bring us closer to annihilation.", //idk about this one
	"All praise to the Emperor.",
	"All souls cry out for salvation.",
	"An alien mind cannot accept the Emperor's blessing.",
	"An empty mind is a loyal mind.",
	"An open mind is like a fortress with its gate unbarred and unguarded.",
	"An unprotected soul can no more cross the storms of the warp than a heretic can bear the gaze of the Inquisition.",
	"Analysis is the bane of conviction.",
	"Appeasement is a curse.",
	"Be courageous and bold, be humble before your masters, lead with valour! These things above all others will be of use when your time comes to die.",
	"Be grateful of your Master's favour!",
	"Be Pure.",
	"Be strong in your ignorance.",
	"Be vigilant and strong. The Emperor knows what evil lurks in the vacillation of a weak fool.",
	"Better crippled in body than corrupt in mind.",
	"Better to self-destruct than acquiesce.",
	"Between the stars the ancient unseen enemies of mankind wait and hunger. Every voyage into the nothing is a confrontation with horror, with the implacable things of the warp, and with man's own innermost fears.",
	"Big guns never tire.",
	"Blessed are the Gun Makers.",
	"Blessed is the mind too small for doubt.",
	"Blind faith is a just cause.",
	"Brave are they who know everything yet fear nothing.",
	"Burn the Heretic! Kill the Mutant! Purge the Unclean!",
	"Burn the Unclean with the fires of Purity.",
	"By the manner of our death are we judged.",
	"By the manner of their death we shall know them.",
	"Call no man happy until he is dead.",
	"Carry the Emperor's will as your torch, with it destroy the shadows.",
	"Cast out the mutant, the traitor, the heretic. For every enemy without there are a hundred within.",
	"Cease and repent!",
	"Cease purpose and die.",
	"Cleanse yourself in the blood of our enemies.",
	"Compromise is akin to treachery.",
	"Consider the Predator. Let your soul be armoured with Faith, driven on the tracks of Obedience which overcome all obstacles, and armed with the three great guns of Zeal, Duty and Purity.",
	"Contemplation is the womb of treachery.",
	"Courage is the Emperor’s gift: repay Him with victory.",
	"Courage is the mastery of fear - not the absence of fear.",
	"Curse now the death in vain.",
	"Damnation is eternal.",
	"Dark dreams lie upon the heart.",
	"Death brings its own reward.",
	"Death is honor.",
	"Death is the only answer.",
	"Death is the servant of the righteous.",
	"Defile not his presence.",
	"Defile the Mutant.",
	"Destroy, destroy, destroy!",
	"Do not question the Will of the Emperor!",
	"Do not wait for death.",
	"Do not waste your tears. I was not born to watch the world grow dim. Life is not measured in years, but by the deeds of men.",
	"Doubt forms the path to damnation.",
	"Doubt is a sign of weakness.",
	"Drink deep of victory and remember the fallen.",
	"Duty prevails.",
	"Enlightenment is a myth we do not need to understand in order to hate.",
	"Even a man who has nothing can still offer his life.",
	"Even though you once called him friend, the Traitor has forsaken you. Show no mercy even if he begs it, for his soul is tainted and given the chance he will betray your trust.",
	"Every human life is a spark in the darkness. It flares for a moment, catches the eye, and is gone forever. A retinal after-image that fades and is obscured forever by newer, brighter lights.",
	"Every lone spirit doubts his strength.",
	"Examine your thoughts!",
	"Excuses are the refuge of the weak.",
	"Exist for the Emperor.",
	"Facts are chains that bind perception and fetter truth. For a man can remake the world if he has a dream and no facts to cloud his mind.",
	"Faith grows from the barrel of a gun.",
	"Faith. Hate. Ignorance.",
	"Faith. Honour. Vigilance.",
	"Faith in the Emperor is its own reward.",
	"Faith is stronger than Adamantium.",
	"Faith is the strongest shield.",
	"Faith is your shield.",
	"Faith without deeds is worthless.",
	"Fear is the Mind Killer.",
	"Fear not death, for the soul of the faithful man never dies.",
	"Fear not the creatures of the jungle but those that lurk within your mind.",
	"Fear the shadows; despise the night. There are horrors that no man can face and survive.",
	"Follow the Emperor, and the glory of victory shall be yours.",
	"Foolish are those who fear nothing, yet claim to know everything.",
	"For a warrior the only crime is cowardice.",
	"For every battle honour, a thousand heroes die alone, unsung, and unremembered.",
	"For the foes of Mankind, the only mercy is a swift death.",
	"For those who seek perfection there can be no rest this side of the grave.",
	"Forgiveness is a sign of weakness.",
	"Forward Brothers, with loyalty to victory and glory!",
	"From the seed of heresy grows the downfall of man.",
	"Glory in death is life eternal.",
	"Happiness is a delusion of the weak.",
	"Hard work conquers everything.",
	"Hate enriches.",
	"Hatred is our surest weapon.",
	"Hatred is the Emperor's greatest gift to humanity.",
	"Hatred steels our resolve.",
	"He bears the weight of Mankind's ills.",
	"He who allows the alien to live shares its crime of existence.",
	"He who lives for nothing is nothing. He who dies for the Emperor is a hero.",
	"He who picks up the sword against us, shall perish by it.",
	"Heresy grows from idleness.",
	"Heresy must be met with hatred.",
	"His will be done.",
	"His word is our strength.",
	"Honor is what a pure mind knows about itself.",
	"Honor your Chapter.",
	"Honour, Duty, and Obedience.",
	"Hope is the beginning of unhappiness.",
	"Hope is the first step on the road to disappointment.",
	"Humanity is an ocean; if a few drops of the ocean are polluted then the ocean is tainted.",
	"If a job's worth doing it's worth dying for!",
	"If a man dies that another should live, that man's spirit shall eat at the Emperor's table.",
	"If you cannot speak well of your Master, be silent!",
	"Ignorance is a virtue.",
	"Ignorance is bliss.",
	"Ignorance is your best defence.",
	"In an hour of Darkness a blind man is the best guide. In an age of Insanity look to the madman to show the way.",
	"In courage we have no equals.",
	"In our resolve we only reflect his purpose of will.",
	"In the blazing furnace of battle we shall forge anew the iron will of yet a stronger race.",
	"In the darkest of moments, the Emperor’s light shines brightest.",
	"In the darkness a blind man is the best guide. In an age of Madness look to the madman to show the way.",
	"Information Is Power.",
	"Innocence proves nothing.",
	"Inspiration grows from the barrel of a gun.",
	"Intellect is a mask for traitors.",
	"Intolerance is a blessing.",
	"It is better that one hundred innocent fall before the wrath of the Emperor than one traitor kneels before the lords of darkness.",
	"It is better to die for the Emperor than to live for yourself.",
	"It is not in my mind to ask questions that cannot be answered. That is the soul standing upon the crossroad of vacillation. You search for wisdom, but achieve only a stasis of will.",
	"It is not the Horror of War that troubles me but the Unseen Horrors of Peace.",
	"It is the bitter tears that the Gods weep that bind us to their hearts.",
	"It is through the Destruction of our Enemies, that we Earn our Salvation.",
	"Kill the mutant.",
	"Know No Fear.",
	"Know the mutant; kill the mutant.",
	"Know thine enemy.",
	"Knowledge is half the battle.",
	"Knowledge is power, guard it well.",
	"Knowledge is to be feared!",
	"Know your destination before you set out.",
	"Know your duty!",
	"Labour long in his sight.",
	"Leniency is a sign of weakness!",
	"Let faith protect your mind and metal your flesh.",
	"Let your soul be armoured with Faith, driven on the tracks of Obedience which overcome all obstacles, and armed with the three great guns of Zeal, Duty and Purity.",
	"Life is a prison, death a release.",
	"Life is the Emperor's currency, spend it well.",
	"Listen not to the alien, look not upon the alien, speak not unto the alien!",
	"Look to your wargear!",
	"Look upon the Emperor's Works and tremble!",
	"Losses are acceptable. Failure is not.",
	"Mankind stands on the shoulders of the Martyred.",
	"May the Emperor's Wrath forever cleanse our souls.",
	"Mercy is a sign of weakness.",
	"My armour is contempt.",
	"Negotiation is surrender.",
	"Never forget, never forgive.",
	"No army is big enough to conquer the galaxy. But faith alone can overturn the universe.",
	"No man died in His service that died in vain.",
	"No Mercy. No Remorse. Just Kill.",
	"No pity! No remorse! No fear!",
	"Nobody is innocent, there are merely varying levels of guilt.",
	"Not even the dead know the end of war.",
	"Nothing can hide from the wrath of the Emperor.",
	"Nothing inspires revenge quite like cold hearted hatred.",
	"Obedience is blind.",
	"Obedience is not enough.",
	"The graves of warriors who have given their lives for the Emperor now outnumber the stars themselves.",
	"Only in death does duty end.",
	"Only the awkward question; only the foolish ask twice.",
	"Only the insane have strength enough to prosper; only those that prosper truly judge what is sane.",
	"Only the faithless question.",
	"Only the lost understand true terror.",
	"Only those that follow the guiding light of the Emperor may save their souls.",
	"On the battlefield, valour is the lifeblood of victory.",
	"Our enemies are mortal no longer. Face them squarely and without flinching from duty. Mercy for such as them is self-deception.",
	"Our mercies destroy us.",
	"Our presence remakes the past.",
	"Over the faithful, fear has no dominion.",
	"Pain is an illusion of the senses, despair is an illusion of the mind.",
	"Peace is Hell.",
	"Perseverance and silence are the highest virtues.",
	"Pity ye not!",
	"Place your trust in the Emperor's steel.",
	"Power resides in the will of the Righteous.",
	"Praise the sun that brings the dawn of our final doom.",
	"Prayer cleanses the soul, but pain cleanses the body.",
	"Pure in body, pure in heart.",
	"Purge the unclean."
	
	//continue starting here https://wh40k.lexicanum.com/wiki/Thought_for_the_day_(Q_-_Z)
	];
	var ranNum = Math.floor(Math.random() * (thoughts.length));
	
	document.getElementById("thought").value = thoughts[ranNum];
}

function toImperial()
{
	var now = new Date();
	
	var imperialDate = "0";
	var month = now.getMonth();
	var day = now.getDate() + (month)*30.437;
	var determined = (day*24) + (now.getHours()+1);
	determined *= 0.11407955;
	determined = Math.trunc(determined);
	
	imperialDate+=determined;
	
	var year = now.getFullYear();
	year = year.toString();
	
	imperialDate+=year[1];
	imperialDate+=year[2];
	imperialDate+=year[3];
	
	imperialDate += ".M3"
	
	document.getElementById("date").value = imperialDate;
}

function copy()
{
	 var text = document.getElementById("output").innerText;
	navigator.clipboard.writeText(text);
	
	alert("Copied text to clipboard.");
}

//unused screenshot function, WIP
function ss()
{
	html2canvas(document.getElementById("dataslate"), {
	  allowTaint: true,
	  useCORS: true,
	})
	.then(function (canvas) {
	  // It will return a canvas element
	  let screenshot = canvas.toDataURL("image/png", 0.5);
	  window.open(screenshot);
	})
	.catch((e) => {
	  // Handle errors
	  console.log(e);
	});
}