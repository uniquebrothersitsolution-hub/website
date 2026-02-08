import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioPage.css';

// SEO Keywords - Hidden but indexed by search engines
const seoKeywords = {
    signage: "LED signage, LED signs, neon signs, illuminated signs, outdoor LED signs, indoor LED signs, custom LED signage, LED name boards, LED shop signs, business signage, storefront signs, retail signage, 3D LED signs, backlit signs, channel letter signs, LED letter signs, acrylic LED signs, flex LED signs, digital signage, electronic signs, light box signs, advertising signs, promotional signage, brand signage, commercial signage, corporate signage, LED display boards, LED advertising boards, signboard design, signage design, custom signs, personalized signs, LED sign installation, sign board makers, name board makers, LED sign suppliers, signage manufacturers, LED signage India, LED signs Nagapattinam, LED signs Tamil Nadu, outdoor advertising signs, indoor advertising signs, shop name boards, office name boards, company name boards, business name plates, LED name plates, illuminated name boards, glowing signs, bright LED signs, energy-efficient signs, low-power LED signs, waterproof LED signs, weather-resistant signs, durable LED signs, long-lasting signs, colorful LED signs, RGB LED signs, multicolor signs, animated LED signs, scrolling LED signs, programmable LED signs, smart LED signs, WiFi LED signs, Bluetooth LED signs, remote control signs, LED menu boards, restaurant LED signs, cafe LED signs, hotel signage, hospital signage, medical center signs, clinic name boards, pharmacy signs, educational institution signs, school name boards, college signage, university signs, temple LED signs, mosque signage, church signs, religious institution signage, wedding hall signs, banquet hall signage, marriage hall LED boards, party hall signs, event venue signage, conference hall signs, auditorium signage, theater LED signs, cinema hall signs, shopping mall signage, showroom LED signs, boutique signs, jewelry shop signs, gold shop LED boards, textile shop signage, garment store signs, footwear shop LED signs, electronics shop signage, mobile shop LED boards, computer shop signs, book store signage, stationery shop signs, bakery LED signs, sweet shop signage, snack center LED boards, ice cream shop signs, juice shop signage, cool drinks LED signs, tea shop signs, coffee shop LED boards, fast food LED signs, restaurant menu boards, food court signage, canteen LED boards, mess hall signs, hostel signage, PG accommodation signs, apartment name boards, residential complex signage, villa name plates, bungalow LED signs, farmhouse signage, resort LED boards, guest house signs, homestay signage, lodge LED signs, hotel room number signs, office cabin signs, department name boards, floor directory signs, building signage, tower name boards, construction site signs, real estate LED signs, property signage, land sale boards, house for sale signs, commercial space signage, office for rent LED boards, shop for lease signs, warehouse signage, factory name boards, industrial LED signs, manufacturing unit signage, workshop name boards, service center LED signs, garage signage, automobile shop signs, bike showroom LED boards, car showroom signage, vehicle service LED signs, spare parts shop signage, lubricant shop LED boards, puncture shop signs, tire shop signage, battery shop LED signs, painting shop signage, glass work LED signs, aluminum fabrication signs, steel fabrication signage, welding shop LED boards, hardware shop signs, plumbing shop signage, electrical shop LED signs, electronics repair LED boards, mobile repair shop signs, laptop service LED signage, computer repair signs, printer service LED boards, photocopy shop signs, xerox center signage, printing press LED signs, offset printing LED boards, flex printing shop signs, digital printing signage, banner printing LED signs, vinyl printing LED boards, screen printing shop signs, embroidery shop signage, tailoring shop LED signs, textile dyeing LED boards, laundry shop signs, dry cleaning signage, ironing shop LED signs, salon LED boards, beauty parlor signs, spa signage, massage center LED signs, gym LED boards, fitness center signage, yoga center LED signs, dance academy LED boards, music academy signs, tuition center signage, coaching center LED signs, training institute LED boards, computer training signs, spoken English LED signage, IELTS coaching signs, competitive exam LED boards, bank coaching LED signs, civil service academy signage, medical entrance LED boards, engineering entrance signs, NEET coaching LED signage, JEE coaching signs, polytechnic LED boards, ITI LED signs, vocational training signage, skill development LED boards, employment training signs, job placement LED signage, recruitment agency signs, HR consultancy LED boards, travel agency signs, tour operator LED signage, ticket booking LED signs, bus ticket LED boards, train ticket signs, flight ticket LED signage, visa services signs, passport services LED boards, money transfer LED signs, remittance LED signage, forex exchange signs, gold jewelry LED boards, silver ornaments signs, diamond jewelry LED signage, platinum jewelry signs, antique jewelry LED boards, artificial jewelry signs, imitation jewelry LED signage, fashion accessories LED signs, cosmetics shop LED boards, perfume shop signs, gift shop LED signage, toy shop LED signs, kids wear LED boards, children's store signs, baby products LED signage, maternity wear signs, ladies wear LED boards, gents wear signs, readymade garment LED signage, textile showroom signs, saree shop LED boards, dress materials LED signs, churidar materials signage, silk saree LED boards, cotton saree signs, bridal wear LED signage, wedding saree signs, designer saree LED boards, fancy saree LED signs, Kanchipuram silk signage, Banarasi silk LED boards, Mysore silk signs, handloom saree LED signage, South Indian silk signs, traditional wear LED boards, ethnic wear LED signs, western wear signage, casual wear LED boards, formal wear signs, party wear LED signage, occasion wear signs, festival collection LED boards, seasonal offers LED signs, discount sale signage, clearance sale LED boards, mega sale LED signs, year-end sale signage, New Year offers LED boards, Diwali sale LED signs, Pongal offers signage, Christmas sale LED boards, independence day LED signs, republic day offers signage, LED boards Nagapattinam, signage Nagapattinam, name boards Nagapattinam, LED signs Thittacheri, signage Thittacheri, LED boards near me, signage near me, name boards near me, best LED signage, top signage makers, quality LED signs, affordable signage, cheap LED boards, budget signage, premium LED signs, luxury signage, elegant LED boards, modern signage, contemporary LED signs, traditional signage, classic LED boards, vintage signs, retro LED signage, artistic signs, creative LED boards, innovative signage, unique LED signs, custom-made signage, personalized LED boards, bespoke signs, tailor-made LED signage, handcrafted signs, designer LED boards, professional signage, expert LED signs, experienced signage makers, skilled LED board manufacturers, certified signage, licensed LED signs, authorized signage dealers, genuine LED boards, authentic signs, original LED signage, warranty LED signs, guaranteed signage, tested LED boards, quality certified signs, ISO certified LED signage, CE marked signs, RoHS compliant LED boards, energy star LED signs, green signage, eco-friendly LED boards, sustainable signs, recyclable LED signage, biodegradable signs, solar LED boards, battery backup LED signs, UPS supported signage, power-saving LED boards, low voltage LED signs, high brightness signage, ultra-bright LED boards, super bright signs, visibility LED signage, clear signs, readable LED boards, legible signs, bold LED signage, eye-catching signs, attractive LED boards, impressive signage, stunning LED signs, beautiful LED boards, gorgeous signage, magnificent LED signs, splendid LED boards, excellent signage, superior LED signs, first-class LED boards, top-quality signage, high-grade LED signs, premium quality LED boards, world-class signage, international standard LED signs, global quality LED boards, export quality signage, imported LED signs, foreign LED boards, local signage, indigenous LED signs, made in India LED boards, swadeshi signage, vocal for local LED signs, Atmanirbhar LED boards, Indian signage, desi LED signs, country LED boards, native signage, homegrown LED signs, domestic LED boards, national signage, patriotic LED signs",

    restaurant: "restaurant branding, food branding, restaurant logo, cafe branding, restaurant design, food service branding, restaurant menu design, menu card design, hotel branding, resort branding, eatery branding, dining branding, culinary branding, gastro branding, bistro branding, fast food branding, quick service restaurant, QSR branding, fine dining branding, casual dining, family restaurant, multi-cuisine restaurant, specialty restaurant, theme restaurant, ethnic restaurant, regional cuisine, local food, authentic food, traditional cuisine, modern cuisine, fusion food, continental food, Chinese restaurant, Indian restaurant, South Indian restaurant, North Indian restaurant, tandoor restaurant, biryani restaurant, biryani house, biryani center, dum biryani, chicken biryani, mutton biryani, prawn biryani, fish biryani, veg biryani, Hyderabadi biryani, Lucknowi biryani, Kolkata biryani, Thalassery biryani, Ambur biryani, Dindigul biryani, Arcot biryani, Muslim biryani, Arabic food, Arabian cuisine, Middle Eastern food, shawarma, falafel, hummus, kebab, grilled food, BBQ, barbecue, tandoori, tikka, curry, gravy, masala, spicy food, mild food, vegetarian food, non-vegetarian food, vegan food, organic food, healthy food, diet food, low-calorie food, high-protein food, gluten-free, sugar-free, fat-free, breakfast restaurant, lunch restaurant, dinner restaurant, all-day dining, 24-hour restaurant, midnight food, late-night food, early morning food, brunch restaurant, buffet restaurant, a la carte, combo meals, set meals, thali restaurant, meals restaurant, unlimited meals, buffet lunch, buffet dinner, weekend buffet, party buffet, wedding catering, event catering, corporate catering, outdoor catering, home catering, bulk orders, group orders, party orders, celebration meals, birthday party, anniversary party, get-together, family function, office party, corporate lunch, business lunch, conference catering, seminar catering, meeting catering, workshop catering, training catering, cultural event catering, religious function catering, temple prasadam, mosque food, church feast, festival catering, Ramadan catering, iftar catering, Eid catering, Christmas catering, New Year catering, Pongal catering, Onam sadhya, Vishu sadhya, wedding feast, reception dinner, engagement function, pre-wedding catering, post-wedding catering, haldi ceremony, mehendi function, sangeet function, cocktail party, bachelor party, farewell party, reunion party, success party, promotion party, retirement party, house warming, griha pravesh, naming ceremony, ear piercing, first birthday, puberty ceremony, betrothal, marriage catering, food truck, mobile restaurant, cloud kitchen, dark kitchen, delivery kitchen, takeaway restaurant, parcel restaurant, home delivery, online food, food delivery, Swiggy partner, Zomato partner, food aggregator, restaurant aggregator, food ordering, online ordering, app-based food, food app, restaurant app, digital menu, QR code menu, contactless menu, contactless dining, safe dining, hygienic food, clean restaurant, sanitized dining, COVID-safe restaurant, social distancing restaurant, outdoor seating, garden restaurant, terrace restaurant, rooftop restaurant, beach restaurant, lakeside restaurant, riverside restaurant, highway restaurant, dhaba, roadside eatery, village restaurant, town restaurant, city restaurant, urban dining, metro restaurant, cosmopolitan dining, international cuisine, global food, world cuisine, exotic food, imported ingredients, fresh ingredients, farm-fresh, organic ingredients, locally sourced, seasonal menu, chef special, signature dish, house special, speciality dish, recommended food, popular dish, best-selling item, customer favorite, award-winning, rated restaurant, reviewed restaurant, top restaurant, best restaurant, famous restaurant, popular restaurant, trending restaurant, viral restaurant, Instagram-worthy, social media food, food photography, food styling, plating, presentation, garnishing, food art, culinary art, gourmet food, premium food, luxury dining, fine cuisine, elegant ambiance, cozy atmosphere, romantic setting, candle-light dinner, couple dining, date night, proposal dinner, special occasion, celebration dining, milestone celebration, achievement party, victory feast, success dinner, food festival, food carnival, food fair, food expo, food court, mall food, shopping center dining, entertainment complex, multiplex food, cinema hall food, theater snacks, interval snacks, quick bites, finger food, appetizers, starters, soups, salads, main course, rice dishes, noodle dishes, pasta, pizza, burger, sandwich, wrap, roll, paratha, naan, roti, chapati, puri, bhatura, kulcha, dosa, idli, vada, uttapam, paniyaram, upma, pongal, kesari, payasam, kheer, halwa, laddu, jalebi, gulab jamun, rasgulla, rasmalai, kulfi, ice cream, desserts, sweets, savories, snacks, chaats, pakora, samosa, bonda, bajji, murukku, mixture, chips, namkeen, biscuits, cookies, cakes, pastries, bread, bakery items, confectionery, chocolates, candies, beverages, soft drinks, juices, shakes, smoothies, lassi, buttermilk, tender coconut, sugarcane juice, lemon juice, coffee, tea, green tea, herbal tea, masala tea, filter coffee, espresso, cappuccino, latte, mocha, cold coffee, hot chocolate, milkshakes, fresh lime soda, mojito, mocktails, virgin cocktails, non-alcoholic drinks, family-friendly, kid-friendly, children's menu, senior citizen discount, student discount, corporate discount, bulk discount, loyalty program, membership benefits, rewards points, cashback offers, special deals, combo offers, value meals, economy meals, budget meals, pocket-friendly, affordable dining, cheap eats, best value, quality food, tasty food, delicious food, yummy food, mouth-watering, lip-smacking, finger-licking, scrumptious, appetizing, flavorful, aromatic, fragrant, savory, tangy, spicy, sweet, sour, bitter, salty, umami, rich, creamy, crunchy, crispy, soft, tender, juicy, succulent, fresh, hot, piping hot, sizzling, steaming, chilled, cold, frozen, fried, grilled, roasted, baked, steamed, boiled, sautéed, stir-fried, deep-fried, shallow-fried, pan-fried, air-fried, pressure-cooked, slow-cooked, tandoor-cooked, clay pot-cooked, charcoal-grilled, wood-fired, smoke-infused, marinated, seasoned, spiced, herbed, garnished, decorated, restaurant Nagapattinam, food Nagapattinam, dining Nagapattinam, eatery Nagapattinam, cafe Nagapattinam, biryani Nagapattinam, restaurant Thittacheri, food Thittacheri, dining Thittacheri, restaurants near me, food near me, dining near me, biryani near me, Arabic food near me, best restaurant, top restaurant, famous restaurant, popular eatery, trending cafe, viral food, tasty biryani, delicious meals, quality food, affordable restaurant, budget dining, cheap eats, value meals, family restaurant, couple dining, group dining, party venue, celebration restaurant, catering services, bulk orders, home delivery, takeaway, online ordering",

    corporate: "business branding, corporate identity, brand identity, company logo, business logo, corporate logo, logo design, brand design, identity design, visual identity, brand guidelines, style guide, brand standards, corporate colors, brand colors, color palette, typography, fonts, business cards, visiting cards, name cards, professional cards, executive cards, premium cards, luxury cards, designer cards, creative cards, unique cards, custom cards, personalized cards, printed cards, digital cards, virtual cards, e-cards, business card design, card printing, offset printing, digital printing, screen printing, letterpress, embossed cards, debossed cards, foil stamped cards, UV coated cards, matte finish, glossy finish, textured cards, specialty paper, recycled paper, eco-friendly cards, thick cards, thin cards, standard size, custom size, die-cut cards, shaped cards, rounded corners, square corners, perforated cards, folded cards, double-sided cards, single-sided cards, colored cards, white cards, black cards, metallic cards, transparent cards, plastic cards, PVC cards, magnetic cards, RFID cards, NFC cards, QR code cards, barcode cards, contact information, company details, designation, job title, department, email address, phone number, mobile number, landline, fax number, website URL, social media handles, office address, registered office, branch office, head office, corporate office, business address, mailing address, physical address, company registration, GST number, PAN number, CIN number, MSME registration, ISO certification, quality certification, accreditation, membership, association, chamber of commerce, trade body, industry association, professional body, corporate stationery, letterhead, envelope, invoice, quotation, estimate, receipt, voucher, bill book, notepad, memo pad, sticky notes, folders, file covers, presentation folders, conference folders, document folders, brochures, flyers, pamphlets, leaflets, catalogs, booklets, magazines, newsletters, annual reports, company profiles, prospectus, tender documents, proposal documents, case studies, white papers, research papers, technical documents, manuals, handbooks, guides, instruction sheets, data sheets, spec sheets, product catalogs, service catalogs, price lists, rate cards, discount vouchers, gift vouchers, gift certificates, coupons, promotional materials, marketing collaterals, advertising materials, point of sale, POS materials, standees, banners, posters, hoardings, billboards, signboards, name boards, fascia boards, pylon signs, totem signs, directional signs, wayfinding signs, informational signs, safety signs, warning signs, caution signs, prohibition signs, mandatory signs, emergency signs, fire exit, evacuation plan, floor plan, seating plan, organizational chart, hierarchy chart, flow chart, process diagram, infographic, data visualization, charts, graphs, presentations, slideshows, PowerPoint, keynote, prezi, canva, templates, mockups, samples, specimens, proofs, drafts, revisions, edits, corrections, amendments, updates, modifications, customization, personalization, branding elements, brand assets, logo files, vector files, raster files, high-resolution, print-ready, web-ready, social media graphics, profile pictures, cover photos, banners, headers, thumbnails, icons, badges, labels, stickers, decals, vehicle graphics, car branding, van branding, truck branding, fleet branding, bus advertising, auto advertising, two-wheeler branding, mobile advertising, transit advertising, outdoor advertising, indoor advertising, ambient advertising, guerrilla marketing, experiential marketing, event branding, exhibition branding, trade show, booth design, stall design, kiosk design, pop-up store, retail branding, showroom branding, office branding, workspace design, interior graphics, wall graphics, wall murals, wallpaper, vinyl graphics, window graphics, floor graphics, ceiling graphics, 3D graphics, dimensional letters, channel letters, LED letters, illuminated signs, non-illuminated signs, acrylic signs, metal signs, wood signs, glass signs, stone signs, fabric signs, canvas signs, foam board, PVC board, aluminum composite panel, ACP cladding, stainless steel, brass, bronze, copper, gold plating, silver plating, chrome finish, powder coating, paint finish, digital signage, electronic displays, LED displays, LCD displays, video walls, interactive displays, touch screens, kiosks, information kiosks, wayfinding kiosks, directory boards, building directory, tenant board, company board, department board, cabin signs, desk name plates, cubicle signs, workstation signs, meeting room signs, conference room, boardroom, training room, seminar hall, auditorium, reception signage, lobby signage, entrance signage, exit signage, parking signage, restroom signage, cafeteria signage, pantry signage, smoking zone, non-smoking zone, restricted area, authorized personnel, visitors area, client lounge, waiting area, queue management, token system, numbering system, floor marking, lane marking, social distancing markers, safety floor signs, anti-slip signs, glow-in-dark signs, reflective signs, high-visibility signs, weatherproof signs, waterproof signs, UV-resistant, fade-resistant, scratch-resistant, vandal-proof, tamper-proof, durable materials, long-lasting, warranty, guarantee, quality assurance, ISO certified, BIS approved, fire-rated, eco-friendly materials, green branding, sustainable design, corporate social responsibility, CSR branding, employee engagement, internal branding, external branding, stakeholder communication, investor relations, public relations, media relations, press releases, media kits, brand storytelling, brand narrative, brand messaging, tagline, slogan, mission statement, vision statement, core values, brand promise, unique selling proposition, USP, competitive advantage, market positioning, target audience, customer persona, demographic, psychographic, behavioral targeting, market research, brand audit, brand strategy, brand architecture, brand portfolio, brand extension, brand refresh, brand revamp, rebranding, brand evolution, brand consistency, brand coherence, brand integrity, brand equity, brand value, brand recognition, brand recall, brand awareness, brand loyalty, brand advocacy, brand reputation, brand perception, brand experience, customer experience, user experience, UX design, UI design, graphic design, creative design, art direction, creative direction, design thinking, design process, concept development, ideation, brainstorming, sketching, wireframing, prototyping, testing, feedback, iteration, finalization, production, implementation, installation, launch, rollout, campaign, activation, engagement, interaction, response, conversion, ROI, return on investment, brand metrics, KPI, key performance indicators, analytics, insights, reporting, dashboard, monitoring, evaluation, assessment, review, optimization, improvement, enhancement, upgrade, innovation, creativity, originality, uniqueness, differentiation, distinction, exclusivity, premium positioning, luxury branding, heritage branding, legacy, tradition, trust, credibility, authority, expertise, professionalism, excellence, quality, reliability, dependability, consistency, integrity, transparency, authenticity, genuineness, corporate branding Nagapattinam, business cards Nagapattinam, logo design Nagapattinam, branding Thittacheri, corporate identity Thittacheri, business branding near me, logo design near me, best branding agency, top design studio, professional branding, quality printing, affordable branding, budget design, premium corporate identity",

    events: "event banners, flex printing, flex banners, vinyl banners, PVC banners, outdoor banners, indoor banners, hanging banners, wall banners, street banners, pole banners, lamp post banners, building wraps, wall wraps, facade wraps, mesh banners, windproof banners, weather-resistant banners, waterproof banners, UV-protected banners, sunboard printing, foam board printing, corrugated board, cardboard signs, standup banners, X-banner stands, roll-up banners, rollup stands, pull-up banners, retractable banners, pop-up displays, backdrop banners, stage backdrops, photo backdrops, selfie backdrops, step and repeat banners, media walls, press walls, sponsor walls, branding walls, exhibition stalls, trade show booths, display counters, promotional kiosks, sampling counters, demo counters, product launch, brand activation, experiential marketing, event marketing, guerrilla marketing, road show, mobile van, promotional vehicle, branded vehicle, campaign vehicle, election campaign, political banners, party flags, rally banners, manifesto posters, candidate posters, election publicity, vote appeal, political advertising, social awareness, public awareness, government schemes, welfare programs, community programs, social initiatives, NGO banners, charity event, fundraising event, donation drive, blood donation camp, health camp, medical camp, eye camp, dental camp, vaccination camp, COVID vaccination, health awareness, disease prevention, hygiene campaign, cleanliness drive, swachh bharat, plastic-free campaign, green campaign, environmental awareness, tree plantation, save trees, save water, save electricity, energy conservation, renewable energy, solar energy, clean energy, pollution control, air quality, water conservation, rainwater harvesting, waste management, recycling campaign, reduce reuse recycle, segregate waste, composting, organic farming, pesticide-free, chemical-free, natural farming, sustainable agriculture, farmer awareness, agricultural exhibition, krishi mela, horticulture show, flower show, garden expo, plant nursery, seeds exhibition, fertilizer exhibition, agricultural equipment, farming tools, irrigation systems, drip irrigation, sprinkler systems, farm machinery, tractor exhibition, harvester, thresher, plough, cultivator, seed drill, crop protection, pest control, weed control, plant disease, veterinary camp, animal husbandry, dairy farming, poultry farming, goat farming, sheep rearing, cattle breeding, livestock exhibition, pet show, dog show, cat show, bird show, aquarium exhibition, fish farming, aquaculture, fisheries development, fishing equipment, marine products, seafood exhibition, food festival, food fair, street food festival, regional food fest, culinary exhibition, cooking competition, chef competition, masterchef, food photography, food blogging, food influencer, restaurant week, dine-out festival, taste of city, gourmet festival, wine festival, beer festival, beverage expo, tea festival, coffee festival, spice festival, organic food fair, health food expo, nutrition exhibition, fitness expo, wellness fair, yoga festival, meditation retreat, spiritual gathering, religious festival, temple festival, church festival, mosque event, pilgrimage, religious procession, devotional music, bhajan sandhya, kirtan, qawwali, gospel singing, choir performance, prayer meeting, satsang, discourse, spiritual talk, religious conference, interfaith dialogue, peace conference, unity march, harmony rally, cultural festival, art festival, craft fair, handicraft exhibition, handloom expo, textile exhibition, fashion show, fashion week, designer showcase, model hunt, beauty pageant, talent show, dance competition, singing competition, music festival, concert, live music, DJ night, rock show, classical music, folk music, traditional dance, contemporary dance, ballet, hip-hop, breakdance, salsa, zumba, aerobics, gymnastics, martial arts, karate, taekwondo, judo, kung fu, kickboxing, boxing, wrestling, weightlifting, bodybuilding, powerlifting, strongman, crossfit, fitness challenge, marathon, half marathon, mini marathon, run for cause, walkathon, cyclothon, cycling race, bicycle rally, bike rally, car rally, motor sports, racing event, drift show, stunt show, adventrue sports, extreme sports, rock climbing, trekking, hiking, camping, outdoor adventure, water sports, swimming, diving, surfing, kayaking, rafting, boating, sailing, parasailing, paragliding, skydiving, bungee jumping, zip-lining, amusement park, theme park, water park, fun fair, carnival, circus, magic show, comedy show, standup comedy, improv, street performance, flash mob, public performance, open mic, poetry slam, storytelling, book reading, literature festival, book fair, book launch, author meet, writer's workshop, publishing conference, education expo, career fair, job fair, recruitment drive, placement fair, skill development, training programs, workshop, seminar, conference, summit, symposium, colloquium, panel discussion, keynote speech, guest lecture, webinar, online event, virtual conference, hybrid event, livestream, broadcast, telecast, video conference, zoom meeting, teams meeting, Google meet, virtual exhibition, online trade show, digital marketing, social media marketing, influencer marketing, brand collaboration, product launch, new product, innovation showcase, technology expo, gadget show, mobile expo, computer exhibition, electronics fair, automation, robotics, AI conference, machine learning, data science, blockchain, cryptocurrency, fintech, startup expo, pitch competition, investor meet, funding event, entrepreneurship summit, business conference, corporate event, AGM, annual general meeting, board meeting, shareholder meeting, investor presentation, quarterly review, business review, sales conference, dealer meet, distributor conference, franchisee meet, partner summit, vendor meet, supplier conference, procurement, tender, auction, bidding, quotation, business networking, B2B event, B2C event, industry meet, chamber meeting, association meeting, club gathering, society meet, community event, neighborhood fest, apartment fest, colony celebration, society day, residents meet, housing complex, gated community, township event, municipal event, corporation function, panchayat celebration, village festival, town fair, city carnival, district event, state event, national event, international conference, global summit, world forum, UN event, diplomatic meet, embassy event, consulate function, cultural exchange, sister city event, twin city celebration, bilateral meet, multilateral conference, peace talks, trade agreement, MoU signing, contract signing, partnership announcement, collaboration, joint venture, merger, acquisition, corporate restructuring, company launch, brand unveiling, store opening, showroom inauguration, factory opening, plant inauguration, warehouse launch, office opening, branch opening, franchise launch, outlet opening, expansion, milestone celebration, foundation day, anniversary, silver jubilee, golden jubilee, diamond jubilee, centenary, bicentenary, establishment day, incorporation day, achievement award, excellence award, quality award, best performer, employee recognition, service award, loyalty award, appreciation, felicitation, honor, tribute, memorial, remembrance, homage, condolence, wreath laying, martyrs day, independence day, republic day, flag hoisting, national anthem, patriotic songs, military parade, police parade, NCC parade, scouts and guides, student parade, school annual day, college day, university convocation, graduation ceremony, degree distribution, certificate distribution, prize distribution, sports day, athletic meet, inter-school, inter-college, inter-university, state-level, national-level, international-level, championship, tournament, league, cup, trophy, medal ceremony, podium, winners, runners-up, participants, volunteers, organizers, sponsors, partners, supporters, donors, contributors, benefactors, patrons, trustees,  ambassadors, event banners Nagapattinam, flex printing Nagapattinam, vinyl banners Nagapattinam, event flex Thittacheri, banners Thittacheri, flex near me, banner printing near me, event materials near me, best flex printing, quality banners, large format printing, outdoor advertising, affordable flex, budget banners, premium event materials, quick printing, same-day printing, urgent printing, express service, fast delivery",

    notices: "community notices, public notices, legal notices, government notices, official notices, formal notices, announcement, proclamation, notification, circular, advisory, bulletin, communique, press release, public information, general information, important notice, urgent notice, emergency notice, alert, warning, caution, attention, reminder, notification board, notice board, information board, announcement board, community board, society notice, apartment notice, housing complex, gated community, residents association, welfare association, owners association, tenant notice, landlord notice, maintenance notice, society rules, bylaws, regulations, guidelines, dos and don'ts, code of conduct, disciplinary action, penalty notice, fine notice, violation notice, defaulter notice, arrears notice, outstanding dues, payment reminder, fee notice, subscription renewal, membership renewal, annual charges, quarterly charges, monthly charges, water charges, electricity charges, common area maintenance, CAM charges, elevator maintenance, lift charges, security charges, watchman salary, housekeeping charges, gardening charges, waste collection, garbage disposal, sewage treatment, water supply, power backup, generator charges, clubhouse charges, swimming pool, gym charges, parking charges, visitor parking, guest parking, vehicle sticker, vehicle registration, entry pass, gate pass, visitor register, domestic help register, maid entry, driver entry, delivery person, courier entry, vendor entry, contractor entry, worker entry, construction permission, renovation permission, alteration permission, modification approval, painting permission, plumbing work, electrical work, civil work, interior work, shift-in notice, shift-out notice, moving notice, relocation notice, transfer of ownership, property transfer, sale deed, lease agreement, rental agreement, tenancy agreement, eviction notice, vacation notice, termination notice, contract termination, service termination, employment termination, dismissal notice, retirement notice, resignation notice, joining letter, appointment letter, offer letter, relieving letter, experience certificate, salary certificate, service certificate, no objection certificate, NOC, clearance certificate, character certificate, conduct certificate, medical certificate, fitness certificate, health certificate, vaccination certificate, COVID certificate, negative RT-PCR, quarantine notice, isolation notice, containment zone, restricted area, lockdown notice, curfew notice, movement restriction, travel restriction, assembly restriction, gathering prohibition, event cancellation, postponement notice, rescheduling, change of venue, change of date, change of time, correction notice, amendments, addendum, supplementary notice, additional information, clarification, explanation, FAQ, frequently asked questions, helpline number, contact details, grievance redressal, complaint registration, feedback, suggestions, opinion, comments, response, reply, acknowledgement, receipt, proof of delivery, served notice, posted notice, published notice, advertised notice, proclaimed, declared, announced, notified, intimated, informed, communicated, conveyed, transmitted, disseminated, circulated, distributed, displayed, exhibited, pasted, affixed, pinned, stapled, laminated, framed, bordered, highlighted, underlined, bold, capitalized, uppercase, important, urgent, immediate, priority, express, fast-track, expedited, emergency, critical, vital, essential, mandatory, compulsory, obligatory, required, necessary, needed, desired, requested, demanded, ordered, directed, instructed, commanded, decreed, ruled, adjudicated, judged, decided, determined, resolved, settled, concluded, finalized, confirmed, verified, authenticated, certified, attested, notarized, stamped, sealed, signed, authorized, approved, sanctioned, ratified, validated, endorsed, supported, backed, sponsored, patronized, funded, financed, aided, assisted, helped, facilitated, enabled, empowered, encouraged, motivated, inspired, driven, pushed, promoted, advocated, championed, defended, protected, safeguarded, secured, ensured, guaranteed, assured, promised, committed, pledged, vowed, sworn, testified, witnessed, observed, noticed, seen, read, heard, understood, comprehended, grasped, realized, recognized, acknowledged, accepted, agreed, consented, concurred, approved, supported, invitation card, wedding invitation, marriage invitation, engagement invitation, betrothal invitation, reception invitation, haldi invitation, mehendi invitation, sangeet invitation, bachelor party invitation, bridal shower invitation, baby shower invitation, birthday invitation, anniversary invitation, housewarming invitation, griha pravesh, naming ceremony, cradle ceremony, ear piercing, thread ceremony, puberty ceremony, half saree function, coming of age, retirement function, farewell party, welcome party, get-together, reunion, alumni meet, school reunion, college reunion, batch meet, class reunion, friends reunion, family gathering, relatives meet, family function, religious function, puja invitation, homam invitation, vratam invitation, festival invitation, cultural event, art exhibition, craft fair, food festival, music concert, dance program, drama, theater, play, movie screening, film festival, awards ceremony, felicitation, honor ceremony, prize distribution, recognition event, inauguration, opening ceremony, launch event, foundation stone laying, bhoomi puja, groundbreaking, ribbon cutting, unveiling, dedication, blessing, consecration, sanctification, purification, cleansing, exorcism, healing, prayer meeting, satsang, discourse, spiritual talk, religious sermon, pravachan, upanyasam, harikatha, bhagavata, ramayana, mahabharata, purana, stotra, mantra, chanting, japa, meditation, dhyana, yoga, pranayama, kriya, sadhana, tapas, penance, fasting, vrata, pilgrimage, yatra, tirtha, darshan, seva, service, charity, donation, dana, alms, offering, prasadam, food distribution, anna daanam, cloth distribution, vastra daanam, book distribution, education aid, scholarship, financial assistance, medical aid, health camp, blood donation, eye donation, organ donation, social service, community service, volunteer work, NGO activity, welfare program, development initiative, empowerment program, skill training, livelihood, employment, job, career, business, enterprise, startup, entrepreneurship, self-employment, micro enterprise, small business, cottage industry, home-based work, work from home, freelance, consultant, advisor, expert, specialist, professional, practitioner, technician, craftsman, artisan, artist, designer, creator, innovator, inventor, researcher, scientist, scholar, academician, teacher, educator, trainer, coach, mentor, guide, counselor, therapist, healer, doctor, physician, surgeon, dentist, nurse, pharmacist, paramedic, health worker, social worker, field worker, community worker, activist, advocate, campaigner, organizer, coordinator, facilitator, moderator, anchor, host, emcee, master of ceremonies, announcer, narrator, storyteller, speaker, orator, presenter, performer, entertainer, artist, musician, singer, dancer, actor, model, influencer, celebrity, personality, VIP, dignitary, chief guest, guest of honor, special invitee, invitee, attendee, participant, delegate, representative, nominee, candidate, aspirant, applicant, seeker, visitor, tourist, traveler, pilgrim, devotee, follower, disciple, student, learner, trainee, apprentice, intern, probationer, fresher, beginner, novice, amateur, enthusiast, hobbyist, collector, connoisseur, aficionado, fan, supporter, well-wisher, patron, sponsor, donor, contributor, benefactor, philanthropist, humanitarian, altruist, volunteer, notices Nagapattinam, invitation cards Nagapattinam, community notices Thittacheri, notice printing near me, invitation printing near me, best notice design, quality invitations, affordable printing, budget notices, premium cards, custom invitations, personalized notices, quick printing, same-day service",

    fashion: "fashion advertising, fashion marketing, fashion branding, fashion posters, fashion flyers, fashion banners, retail advertising, retail marketing, retail branding, store advertising, shop advertising, showroom advertising, boutique advertising, outlet marketing, fashion show, fashion week, fashion event, ramp walk, runway show, model portfolio, modeling agency, fashion photography, fashion photoshoot, commercial photography, product photography, catalog shoot, lookbook, fashion catalog, fashion magazine, fashion editorial, fashion spread, fashion feature, fashion article, style guide, trend report, seasonal collection, new arrivals, latest fashion, trending styles, viral fashion, Instagram fashion, social media fashion, influencer fashion, celebrity fashion, designer wear, haute couture, ready-to-wear, pret-a-porter, fast fashion, slow fashion, sustainable fashion, ethical fashion, eco-fashion, green fashion, organic clothing, natural fabrics, recycled fashion, upcycled fashion, vintage fashion, retro fashion, classic fashion, timeless style, contemporary fashion, modern style, minimalist fashion, maximalist fashion, avant-garde, experimental fashion, innovative design, creative fashion, artistic clothing, wearable art, fashion art, textile art, fabric art, handloom fashion, handwoven, handcrafted, artisan fashion, traditional wear, ethnic wear, cultural clothing, regional dress, folk costume, national dress, traditional attire, heritage fashion, legacy clothing, bridal wear, wedding fashion, bridesmaid dress, groom wear, sherwani, kurta, dhoti, veshti, mundu, lungi, saree, lehenga, chaniya choli, salwar kameez, churidar, Anarkali, palazzo, patiala, kurti, tunic, kaftan, abaya, burkha, burqa, hijab, niqab, dupatta, chunni, stole, shawl, scarf, muffler, purdah, gown, maxi dress, midi dress, mini dress, skirt, blouse, top, shirt, t-shirt, tank top, camisole, crop top, off-shoulder, cold shoulder, halter neck, sweetheart neck, V-neck, round neck, high neck, turtle neck, boat neck, square neck, asymmetric, one-shoulder, strapless, sleeveless, short sleeve, elbow sleeve, three-quarter, full sleeve, bell sleeve, flutter sleeve, puff sleeve, balloon sleeve, cape sleeve, batwing, dolman, raglan, kimono sleeve, bishop sleeve, fitted, slim fit, tailored, structured, loose fit, oversized, relaxed fit, boyfriend fit, mom fit, skinny, straight leg, wide leg, flared, bootcut, bell-bottom, palazzo pants, harem pants, joggers, track pants, sweatpants, leggings, tights, jeggings, treggings, denim, jeans, shorts, capri, bermuda, hot pants, trousers, slacks, chinos, cargo pants, formal wear, business wear, office wear, corporate fashion, professional attire, business casual, smart casual, casual wear, everyday wear, weekend wear, vacation wear, resort wear, beach wear, swimwear, bikini, monokini, tankini, one-piece, two-piece, cover-up, sarong, kaftan, pareo, rashguard, boardshorts, swim trunks, activewear, sportswear, gym wear, fitness fashion, athleisure, yoga pants, yoga tops, sports bra, tank, leggings, capri, shorts, track suit, hoodie, sweatshirt, windbreaker, rain jacket, performance wear, moisture-wicking, breathable, quick-dry, stretchable, compression wear, shapewear, innerwear, lingerie, bra, panty, camisole, slip, chemise, teddy, bodysuit, shapewear, control brief, thong, G-string, boy short, hipster, bikini brief, briefs, boxers, boxer briefs, trunks, vests, undershirts, thermal wear, winter wear, woolens, sweater, cardigan, pullover, jacket, coat, blazer, trench coat, overcoat, parka, puffer jacket, quilted jacket, bomber jacket, denim jacket, leather jacket, faux leather, suede, velvet, corduroy, tweed, flannel, chambray, linen, cotton, silk, satin, chiffon, georgette, crepe, jersey, polyester, nylon, rayon, viscose, spandex, lycra, elastane, blended fabric, mixed fabric, printed fabric, plain fabric, solid color, pastel, neon, bright, bold, muted, neutral, black, white, grey, beige, brown, tan, khaki, navy, blue, teal, turquoise, cyan, green, olive, lime, yellow, mustard, orange, rust, red, maroon, burgundy, wine, pink, rose, coral, peach, lavender, purple, violet, magenta, metallic, gold, silver, bronze, copper, sequin, shimmer, glitter, sparkle, shine, glossy, matte, textured, embossed, embroidered, beaded, studded, stone work, mirror work, zari work, thread work, patch work, applique, lace, fringe, tassel, ruffle, pleats, gathers, smocking, shirring, draping, layering, colorblock, stripes, checks, plaids, polka dots, floral print, abstract print, geometric print, animal print, leopard, zebra, snake, camouflage, tie-dye, ombre, gradient, fade, digital print, screen print, block print, batik, ikat, kalamkari, bandhani, ajrakh, leheriya, warli, madhubani, patola, pochampally, kota doria, chanderi, Kanchipuram, Banarasi, Mysore silk, Tussar, muga, eri, mulberry, wild silk, raw silk, pure silk, art silk, fashion accessories, jewelry, imitation jewelry, artificial jewelry, costume jewelry, fashion jewelry, fine jewelry, gold jewelry, silver jewelry, diamond, platinum, gemstone, precious stone, semi-precious, pearl, ruby, sapphire, emerald, topaz, garnet, amethyst, aquamarine, opal, turquoise, coral, kundan, meenakari, polki, jadau, temple jewelry, antique jewelry, vintage jewelry, contemporary jewelry, modern jewelry, minimalist jewelry, statement jewelry, chunky jewelry, delicate jewelry, dainty, fine, necklace, choker, collar, princess, matinee, opera, rope, pendant, locket, chain, earrings, studs, drops, danglers, hoops, chandbalis, jhumkas, tops, clips, ear cuffs, rings, finger rings, toe rings, bangles, bracelets, kada, cuff, anklet, payal, armlet, bajuband, maang tikka, matha patti, nath, nose ring, hair accessories, hair clips, hair pins, hair bands, headbands, scrunchies, hair ties, barrettes, hair combs, hair sticks, tiaras, crowns, fascinators, veils, hair extensions, wigs, belts, waist belt, chain belt, sash, cummerbund, bags, handbags, purses, clutches, sling bags, crossbody, shoulder bags, tote bags, hobo bags, satchel, messenger bags, backpacks, rucksack, duffel bags, travel bags, luggage, wallets, card holder, coin purse, pouches, cosmetic bags, laptop bags, briefcase, footwear, shoes, sandals, flats, heels, stilettos, pumps, wedges, platforms, kitten heels, block heels, cone heels, boots, ankle boots, knee-high, thigh-high, Chelsea boots, combat boots, sneakers, trainers, athletic shoes, running shoes, walking shoes, casual shoes, formal shoes, loafers, moccasins, slip-ons, lace-ups, oxfords, brogues, derbies, monk straps, boat shoes, espadrilles, mules, clogs, slides, flip-flops, chappals, kolhapuri, juttis, mojaris, sunglasses, eyewear, specs, frames, aviators, wayfarers, cat-eye, round, square, oversized, vintage, retro, mirrored, gradient, polarized, UV protection, watches, timepieces, analog, digital, smart watch, fitness tracker, chronograph, luxury watch, designer watch, fashion watch, sports watch, dive watch, dress watch, casual watch, formal watch, gloves, hats, caps, beanies, berets, fedora, panama, bucket hat, visor, sun hat, winter hat, scarves, mufflers, stoles, shawls, wraps, ponchos, capes, masks, face masks, fashion masks, designer masks, printed masks, personalized fashion, custom design, tailored, bespoke, made-to-measure, made-to-order, alterations, stitching, embroidery, customization, monogram, initials, name tag, label, brand tag, care label, wash care, dry clean, hand wash, machine wash, iron, steam, store, hang, fold, wardrobe, closet, organizing, styling, personal styling, image consulting, color analysis, body type, fashion tips, style advice, fashion blog, fashion vlog, fashion influencer, fashion icon, style icon, trendsetter, fashionista, style maven, fashion forward, on-trend, in vogue, in style, chic, elegant, sophisticated, classy, graceful, glamorous, gorgeous, stunning, beautiful, pretty, attractive, eye-catching, head-turning, show-stopping, spotlight-worthy, red carpet, celebrity style, runway inspired, haute street style, street fashion, urban fashion, hip-hop fashion, indie fashion, bohemian, boho chic, hippie, grunge, punk, goth, emo, preppy, sporty, tomboy, girly, feminine, masculine, androgynous, gender-neutral, unisex, fashion Nagapattinam, clothing Nagapattinam, apparel Nagapattinam, garments Nagapattinam, fashion Thittacheri, retail Thittacheri, boutique near me, fashion store near me, clothing shop near me, trendy fashion, latest styles, affordable fashion, budget clothing, designer wear, premium fashion, luxury clothing"
};

// Generate comprehensive hidden SEO content
const generateSEOContent = () => {
    const allKeywords = Object.values(seoKeywords).join(', ');
    return allKeywords;
};


const portfolioList = [
    {
        id: 1,
        title: "LED Signage",
        category: "Signage",
        tag: "High-Visibility",
        images: ["/ai-led-sign.png", "/work-4.jpg", "/hero-led-arabic.png"],
        description: "Professional LED signs, name boards, and Arabic calligraphy boards designed for impact."
    },
    {
        id: 2,
        title: "Restaurant & Food Branding",
        category: "Food & Beverage",
        tag: "Creative",
        images: [
            "/portfolio/flyers/Arabs_cafe.jpg",
            "/portfolio/flyers/Arabs_cafe_2.jpg",
            "/portfolio/flyers/Arabs_cafe_3.jpg",
            "/portfolio/flex/bririyani_1.jpg",
            "/portfolio/flyers/Flames.jpg",
            "/portfolio/flyers/Delta_Catering.jpg",
            "/portfolio/flyers/Delta_2.jpg",
            "/portfolio/flyers/Classic_Kitcher.jpg",
            "/portfolio/flyers/Glass_House.jpg",
            "/portfolio/flex/DF.jpg",
            "/portfolio/flyers/Pure.jpg"
        ],
        description: "Complete branding solutions for restaurants, including flex banners, menu designs, and promotional flyers."
    },
    {
        id: 3,
        title: "Business & Corporate Identity",
        category: "Corporate",
        tag: "Professional",
        images: [
            "/portfolio/flyers/MJ_1.jpg",
            "/portfolio/flyers/Mj_2.jpg",
            "/portfolio/flyers/Mj_3.jpg",
            "/portfolio/flyers/MJ_4.jpg",
            "/portfolio/flex/Bava.jpg",
            "/portfolio/flex/Bava_3.jpg"
        ],
        description: "Elegant business cards, logos, and corporate identity designs for a professional look."
    },
    {
        id: 4,
        title: "Event Banners & Flex Printing",
        category: "Printing",
        tag: "Premium Quality",
        images: [
            "/portfolio/flex/Humaina_1.jpg",
            "/portfolio/flex/Humaina_2.jpg",
            "/portfolio/flex/Humaina_3.jpg",
            "/portfolio/flex/Humaina_4.jpg",
            "/portfolio/flex/Humaina_5.jpg",
            "/portfolio/flex/Humaina_6.jpg",
            "/portfolio/flex/Humaina_7.jpg"
        ],
        description: "High-definition flex printing for large-scale event banners and outdoor advertising."
    },
    {
        id: 5,
        title: "Community Notices & Invitations",
        category: "Notices & Events",
        tag: "Informative",
        images: [
            "/portfolio/flyers/Labbaik_Notice.jpg",
            "/portfolio/flyers/Psr_Notice.jpg",
            "/portfolio/flyers/Thameed_Notice.jpg",
            "/portfolio/flyers/Invitation.jpg",
            "/portfolio/flex/Friends.jpg",
            "/portfolio/flex/Friends_2.jpg"
        ],
        description: "Clear and professional notices, invitation cards, and community event banners."
    },
    {
        id: 6,
        title: "Fashion & Retail",
        category: "Advertising",
        tag: "Trendy",
        images: [
            "/portfolio/flyers/Nisha_Burka.jpg",
            "/portfolio/flyers/City_1.jpg",
            "/portfolio/flyers/City_2.jpg",
            "/portfolio/flex/Fruts.jpg"
        ],
        description: "Eye-catching fashion posters and commercial advertising flyers for retail growth."
    }
];

const PortfolioCard = ({ item, onImageClick }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const hasMultipleImages = item.images && item.images.length > 1;
    const minSwipeDistance = 50;

    const onTouchStartLocal = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMoveLocal = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEndLocal = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) nextImage();
        else if (distance < -minSwipeDistance) prevImage();
    };

    const nextImage = (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
    };

    const prevImage = (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
    };

    const currentImage = hasMultipleImages ? item.images[currentImageIndex] : item.image;

    return (
        <div className="portfolio-page-card">
            <div className="portfolio-page-banner">{item.tag}</div>
            <div
                className="portfolio-page-img-container"
                onTouchStart={hasMultipleImages ? onTouchStartLocal : undefined}
                onTouchMove={hasMultipleImages ? onTouchMoveLocal : undefined}
                onTouchEnd={hasMultipleImages ? onTouchEndLocal : undefined}
                onClick={() => onImageClick(currentImage)}
            >
                <img
                    key={currentImageIndex}
                    src={currentImage}
                    alt={item.title}
                    className="portfolio-page-img fade-in"
                />
                {hasMultipleImages && (
                    <>
                        <button className="slider-btn prev" onClick={prevImage}>‹</button>
                        <button className="slider-btn next" onClick={nextImage}>›</button>
                        <div className="slider-dots">
                            {item.images.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setCurrentImageIndex(idx);
                                    }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="portfolio-page-details">
                <span className="portfolio-page-cat">{item.category}</span>
                <h3 className="portfolio-page-title">{item.title}</h3>
                <p className="portfolio-page-desc">{item.description}</p>
                <div className="portfolio-page-footer">
                    <a
                        href={`https://wa.me/918270150033?text=Hi, I'm interested in ordering a ${item.title} from your portfolio.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-order-whatsapp"
                    >
                        Order via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

const PortfolioPage = () => {
    const [zoomIndex, setZoomIndex] = useState(null);
    const [touchStartX, setTouchStartX] = useState(0);

    const allGalleryImages = portfolioList.flatMap(item =>
        item.images.map(img => ({ url: img, title: item.title }))
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openZoom = (imgUrl) => {
        const index = allGalleryImages.findIndex(img => img.url === imgUrl);
        setZoomIndex(index);
        document.body.classList.add('no-scroll');
    };

    const closeZoom = () => {
        setZoomIndex(null);
        document.body.classList.remove('no-scroll');
    };

    const nextZoom = (e) => {
        if (e) e.stopPropagation();
        setZoomIndex((prev) => (prev + 1) % allGalleryImages.length);
    };

    const prevZoom = (e) => {
        if (e) e.stopPropagation();
        setZoomIndex((prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length);
    };

    const [isSwiping, setIsSwiping] = useState(false);

    const onTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
        setIsSwiping(false);
    };

    const onTouchMove = () => {
        setIsSwiping(true);
    };

    const onTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        const threshold = 30;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) nextZoom();
            else prevZoom();
        }
    };

    const handleOverlayClick = (e) => {
        if (!isSwiping && e.target.classList.contains('image-zoom-overlay')) {
            closeZoom();
        }
    };

    return (
        <div className="portfolio-page section-padding">
            <div className="container">
                <div className="page-nav">
                    <Link to="/" className="back-link">← Back to Home</Link>
                </div>

                <div className="page-header">
                    <h1 className="gradient-text">Creative Portfolio</h1>
                    <p className="page-subtitle">From professional signage to digital design, explore our wide range of creative solutions.</p>
                </div>

                <div className="portfolio-page-grid">
                    {portfolioList.map((item) => (
                        <PortfolioCard key={item.id} item={item} onImageClick={openZoom} />
                    ))}
                </div>

                {/* Portfolio Gallery Lightbox */}
                {zoomIndex !== null && (
                    <div
                        className="image-zoom-overlay"
                        onClick={handleOverlayClick}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <button className="zoom-nav-btn prev" onClick={prevZoom}>‹</button>
                        <div className="image-zoom-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-zoom" onClick={closeZoom}>✕</button>
                            <img
                                src={allGalleryImages[zoomIndex].url}
                                alt={`${allGalleryImages[zoomIndex].title} zoom`}
                                className="zoomed-image"
                            />
                            <div className="zoom-caption">{allGalleryImages[zoomIndex].title}</div>
                        </div>
                        <button className="zoom-nav-btn next" onClick={nextZoom}>›</button>
                    </div>
                )}

                <div className="custom-request">
                    <h3>Looking for something unique?</h3>
                    <p>We handle all types of custom design and fabrication projects. Let's discuss your specific needs.</p>
                    <a href="https://wa.me/918270150033" className="btn-cta">Start a Project</a>
                </div>
                {/* Hidden SEO Content - Indexed by Search Engines but hidden from UI */}
                <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                    <section>
                        <h2>LED Signage Services - Nagapattinam</h2>
                        <p>{seoKeywords.signage}</p>
                    </section>

                    <section>
                        <h2>Restaurant Branding Services - Nagapattinam</h2>
                        <p>{seoKeywords.restaurant}</p>
                    </section>

                    <section>
                        <h2>Corporate Branding Services - Nagapattinam</h2>
                        <p>{seoKeywords.corporate}</p>
                    </section>

                    <section>
                        <h2>Event Banners & Flex Printing - Nagapattinam</h2>
                        <p>{seoKeywords.events}</p>
                    </section>

                    <section>
                        <h2>Community Notices & Invitations - Nagapattinam</h2>
                        <p>{seoKeywords.notices}</p>
                    </section>

                    <section>
                        <h2>Fashion & Retail Advertising - Nagapattinam</h2>
                        <p>{seoKeywords.fashion}</p>
                    </section>

                    <section>
                        <h3>Serving Nagapattinam, Thittacheri and Surrounding Areas</h3>
                        <p>Unique Brothers, portfolio services Nagapattinam, creative services Thittacheri, design services Tamil Nadu, printing services Nagapattinam district, branding agency Nagapattinam, advertising services Thittacheri, signage makers Nagapattinam, flex printing Thittacheri, LED boards Nagapattinam, name boards Thittacheri, business cards Nagapattinam, invitation cards Thittacheri, best portfolio Nagapattinam, top creative agency Nagapattinam, professional design services Nagapattinam, quality printing Thittacheri, affordable branding Nagapattinam, budget printing Thittacheri, premium design Nagapattinam, luxury branding services</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
