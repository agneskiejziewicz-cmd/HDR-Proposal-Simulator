const criteria = [
  {
    title: "Cogency / clarity of research proposal",
    description:
      "Evaluates whether the proposal is clear, well-written, and structured around an identified research gap, aims and objectives, methodology, outcomes, and impact. It also considers whether the candidate shows the knowledge, skills, research experience, qualifications, and English proficiency needed to complete the PhD.",
    levels: {
      1: "Proposal is unclear, with many grammatical errors, and the candidate lacks sufficient knowledge and experience.",
      2: "Proposal is understandable but contains several grammatical issues, with some gaps in knowledge and experience.",
      3: "Proposal is clear with minor grammatical issues, and the candidate demonstrates adequate knowledge and experience.",
      4: "Proposal is well-written with few grammatical errors, showing strong knowledge and relevant experience.",
      5: "Proposal is excellent, with a research gap, aims and objectives, brief methodology, and potential impacts. It is well structured with no grammatical errors, displaying exceptional knowledge and extensive experience."
    }
  },
  {
    title: "Research motivation and novelty",
    description:
      "Assesses how well the candidate articulates the motivation behind the research, focusing on the novelty of the ideas and investigated subject. The topic should be significant and have the potential to add new knowledge to the research area.",
    levels: {
      1: "Research motivation is unclear or weakly articulated, with no novelty.",
      2: "Research motivation is somewhat clear but lacks depth and originality.",
      3: "Research motivation is clear but only moderately novel.",
      4: "Research motivation is well articulated, with notable novelty.",
      5: "Research motivation is exceptionally clear and introduces highly novel ideas. The research can contribute significant new knowledge to the research community."
    }
  },
  {
    title: "Alignment to the school",
    description:
      "Evaluates the alignment of the proposed research with the focus areas and research clusters of SCD. It considers whether the project fits the strategic priorities and focus areas of the institution and addresses RMIT values.",
    levels: {
      1: "Research project does not align with the focus areas or research clusters of SCD.",
      2: "Research project has limited alignment with the focus areas and research clusters of SCD.",
      3: "Research project is somewhat aligned with the focus areas and research clusters of SCD.",
      4: "Research project is well aligned with the focus areas and research clusters of SCD.",
      5: "Research project is perfectly aligned with the focus areas and research clusters of SCD."
    }
  },
  {
    title: "Scholarly strength of the proposal",
    description:
      "Assesses the academic rigor of the research proposal by examining the soundness of the research framework and the candidate's understanding of the field. It considers whether the proposed research is methodologically robust and theoretically grounded.",
    levels: {
      1: "Research framework is weak, and the candidate demonstrates a limited understanding of the field.",
      2: "Research framework has some weaknesses, and the candidate's understanding of the field is adequate but not strong.",
      3: "Research framework is adequate, and the candidate shows a reasonable understanding of the field.",
      4: "Research framework is strong, and the candidate demonstrates a good understanding of the field.",
      5: "Research framework is excellent, and the candidate shows an exceptional understanding of the field."
    }
  },
  {
    title: "Significance of the contribution",
    description:
      "Evaluates the potential impact of the research within Vietnam. It examines evidence for the significance of the contribution to academia, industry, or society in the Vietnamese context, and considers whether the research addresses global challenges or aligns with Sustainable Development Goals.",
    levels: {
      1: "Little to no evidence of potential impact within Vietnam.",
      2: "Minimal and not well-supported evidence of potential impact.",
      3: "Moderate and somewhat supported evidence of potential impact.",
      4: "Strong and well-supported evidence of potential impact.",
      5: "Compelling and exceptionally well-supported evidence of potential impact."
    }
  }
];

const proposals = [
  {
    title: "Locative Digital Storytelling and Urban Memory in Ho Chi Minh City",
    field: "Digital Media / Screen and Digital Media / Cultural Studies",
    closestField: "Screen and Digital Media",
    text: `Title and topic
Locative Digital Storytelling and Urban Memory in Ho Chi Minh City

This project sits at the intersection of screen and digital media, cultural studies, urban studies, and heritage communication. It examines how location-based mobile storytelling can communicate everyday urban memory in rapidly transforming parts of Ho Chi Minh City. Rather than focusing only on recognised monuments, museums, or officially protected heritage sites, the project turns attention to ordinary urban environments: canals, alleyways, markets, ferry routes, informal labour sites, bridges, housing clusters, and neighbourhood spaces shaped by migration and everyday survival.

The central concern of the proposal is how digital media can help make these less visible forms of memory experiential. Ho Chi Minh City is undergoing intense redevelopment, and many areas are being reshaped through infrastructure expansion, real estate development, canal-side clearance, road widening, and changing patterns of labour and mobility. In this context, urban memory is not only stored in buildings or archives, but also in walking routes, family stories, local occupations, soundscapes, food practices, social routines, and personal attachments to place. These memories are often fragile because they are informal, oral, embodied, and rarely documented in institutional heritage systems.

The project will focus on District 4 and areas around the Kênh Tẻ canal as a case study. These sites are historically connected to water-based movement, port activity, migration, working-class life, dense neighbourhood networks, and changing urban infrastructure. The research will explore how a mobile, site-responsive storytelling experience can allow users to encounter these memories while physically moving through the city. The proposed outcome is both analytical and practice-based: a written study of locative digital storytelling as an urban memory practice, and a small mobile prototype that demonstrates how short audio-visual stories can be attached to specific places.

Abstract
This research investigates how locative digital media can be used to make everyday urban memory visible, situated, and experiential in Ho Chi Minh City. As redevelopment changes districts, canals, alleyways, markets, housing areas, and informal labour sites, many ordinary places connected to migration, water culture, family histories, and community memory are disappearing or being visually overwritten. Formal heritage institutions preserve selected historical narratives, but less formal neighbourhood memories often remain absent from public communication. This is especially important in cities where rapid transformation creates a gap between official images of modernisation and the lived experiences of residents who remember older forms of urban life.

The study proposes that locative digital storytelling can become a method for communicating these memories without removing them from their spatial context. Instead of presenting heritage as something fixed inside a museum, the project examines how stories can be encountered while walking through the city. Mobile media, GPS-triggered content, sound, image, text, and short video can create layered encounters between present-day urban space and remembered place. A canal, alleyway, bridge, or market can therefore become not simply a background for digital content, but an active part of the storytelling experience.

The research will focus on District 4 and areas around the Kênh Tẻ canal. This area is significant because it contains overlapping histories of water infrastructure, port labour, migration, dense residential development, and recent urban change. The canal and surrounding neighbourhoods can be understood as sites where official urban planning, community memory, and everyday movement intersect. Through fieldwork, interviews, archival research, site observation, and prototype development, the study will identify a small number of locations that carry important but under-communicated memories. These may include stories related to water transport, informal economies, family migration, neighbourhood change, food and market culture, religious or community practices, and the emotional experience of displacement or adaptation.

The project will use a qualitative, practice-based methodology. Fieldwork will involve walking, mapping, photographing, listening, and observing selected sites. Interviews or informal conversations with residents, local workers, cultural practitioners, or community members will help identify memories attached to specific places. Archival research will contextualise these memories in relation to historical maps, photographs, planning documents, media reports, and existing scholarship on Ho Chi Minh City's urban development. These materials will inform the design of a small locative storytelling prototype. The prototype will not aim to represent the entire history of District 4, but to test how selected micro-stories can be communicated through site-specific mobile interaction.

The final prototype may include short audio stories, archival images, contemporary photographs, text fragments, sound recordings, and simple interactive prompts. These will be designed to activate when users arrive at selected sites, encouraging them to slow down, observe, listen, and reflect on the relationship between memory and place. The research will then analyse the design process and prototype as a case study in locative heritage communication. The expected contribution is a culturally specific framework for understanding how mobile storytelling can support urban memory work in Southeast Asian cities experiencing rapid redevelopment.

Research questions in the context of existing research
The main research question is: How can locative digital storytelling design make everyday urban memory visible and experiential in contemporary Ho Chi Minh City?

This question is supported by several secondary questions. First, what types of place-based memory are at risk of being lost, marginalised, or overwritten in rapidly changing urban areas such as District 4 and the Kênh Tẻ canal? Second, how do mobile interfaces shape embodied encounters with place, particularly when users experience digital stories while physically walking through the city? Third, what kinds of audio-visual, narrative, and interaction design principles can support culturally specific urban storytelling in Vietnam? Fourth, how can locative storytelling avoid treating local communities simply as content sources, and instead approach memory as situated, relational, and ethically sensitive?

The research draws on several existing fields. Locative media studies provide a foundation for understanding how mobile technologies connect digital content to physical sites. This body of research has shown that mobile interfaces can alter how users perceive place, movement, distance, attention, and public space. Digital storytelling research contributes methods for structuring personal and community narratives through multimedia forms. Urban memory studies help explain how cities are remembered not only through monuments and official archives, but also through everyday practices, oral histories, sensory impressions, and attachments to ordinary spaces. Heritage communication provides the broader context for thinking about how the past is selected, mediated, interpreted, and shared with publics.

However, there is a gap in the existing research. Much of the literature on locative media and digital heritage focuses on Euro-American cities, museum-led projects, tourism applications, or officially recognised cultural sites. Southeast Asian urban contexts remain comparatively underrepresented, particularly where informal memory, water infrastructure, migration, and rapid redevelopment intersect. Ho Chi Minh City offers an important case because its urban history is shaped by colonial infrastructure, river and canal systems, war memory, post-reform economic change, informal settlement, and contemporary globalisation. These layers make it a complex site for investigating how memory survives in the everyday city.

The project also responds to limitations in some digital heritage practices. Many heritage apps present information as static text or linear historical explanation attached to a location. This project asks how locative storytelling can become more affective, sensory, and situated. Instead of only telling users what happened in a place, it explores how design can encourage users to notice atmosphere, movement, sound, material change, and the contrast between past and present. The research therefore positions locative digital storytelling not simply as a communication tool, but as a method of embodied urban interpretation.

The study will contribute to existing research by combining theoretical analysis with prototype development. The written component will examine how memory, place, interface, and movement interact in locative storytelling. The practice component will test these ideas through a small but concrete design outcome. This combination allows the project to generate knowledge through both critical analysis and design experimentation.

Significance and impact
The study is significant for Vietnam because urban heritage discussions often prioritise architecture, monuments, colonial buildings, religious sites, or officially recognised historical locations. While these sites are important, they do not fully represent how residents experience urban memory in daily life. Many meaningful memories are attached to ordinary spaces that may not appear visually spectacular or institutionally valuable. An alley where migrant families first settled, a canal crossing used by workers, a market corner associated with informal trade, or a neighbourhood soundscape may carry deep social and emotional meaning. This project shifts attention to these community-based and affective forms of memory.

The academic contribution of the research is a framework for analysing locative storytelling as an urban memory practice in Southeast Asian cities. This framework will be useful for scholars working in digital media, heritage studies, screen and media studies, urban cultural research, and practice-based design. By focusing on Ho Chi Minh City, the project will expand discussions of locative media beyond dominant Western case studies and contribute a situated account of how mobile storytelling operates in a dense, rapidly changing Southeast Asian urban environment.

The practical contribution is a prototype model that cultural organisations, educators, designers, and community groups could adapt to communicate local heritage outside formal museum spaces. The prototype will demonstrate how small-scale, low-cost, site-responsive storytelling can be used to activate local memory. This is important because not every heritage project requires a large institution, permanent exhibition, or expensive immersive installation. Mobile storytelling can offer a flexible format for community heritage, student projects, walking tours, neighbourhood archives, and public history initiatives.

The project may also have educational impact. It could be adapted for teaching digital storytelling, urban media, heritage communication, or design research. Students could learn how to conduct fieldwork, work with place-based narratives, design ethically with community memory, and create mobile media prototypes grounded in local context. In this way, the project supports both research and pedagogy.

Finally, the project has broader social relevance. In a city undergoing rapid transformation, questions of memory are also questions of belonging, visibility, and cultural continuity. When everyday places disappear or are redesigned, the stories attached to them can also fade. Locative digital storytelling cannot stop redevelopment, but it can create moments of attention, documentation, and public reflection. It can help users see familiar urban spaces differently and recognise that heritage is not only located in the distant past, but also in the lived experiences of ordinary communities. The project therefore contributes to a more inclusive understanding of urban heritage in Ho Chi Minh City.`
  },
  {
    title: "Adaptive Reuse of Colonial-Era Buildings for Creative Communities in Hanoi",
    field: "Architecture / Built Environment / Heritage, Archive and Museum Studies",
    closestField: "Heritage, Archive and Museum Studies",
    text: `Title and topic
Adaptive Reuse of Colonial-Era Buildings for Creative Communities in Hanoi

This project examines how colonial-era and early modern buildings in Hanoi can be reused as living cultural infrastructure for artists, designers, independent publishers, small studios, cultural organisers, and community-based creative events. It sits at the intersection of architecture, heritage studies, urban cultural policy, creative industries, and spatial justice. Rather than treating older buildings only as monuments to be preserved or as obsolete structures to be replaced, the project investigates how they can continue to support social, cultural, and creative life in the contemporary city.

Hanoi contains a wide range of colonial-era and early modern built forms, including villas, administrative buildings, schools, cafés, cultural centres, shophouses, residential structures, and former institutional buildings. Many of these buildings have changed function repeatedly over time. Some have been demolished or heavily modified, while others have been informally adapted by residents, businesses, cultural workers, and creative organisations. These buildings carry architectural value, but they also carry layered social histories: histories of colonial planning, postcolonial occupation, domestic adaptation, artistic production, local commerce, education, and everyday community use.

The project focuses specifically on adaptive reuse in relation to creative communities. In Vietnam, creative industries are expanding, but artists, designers, independent publishers, and small cultural initiatives often struggle to access affordable and flexible spaces. At the same time, older buildings in central urban areas are under pressure from commercial redevelopment, tourism, rising land values, and changing ownership patterns. This creates an important research problem: how can heritage buildings be reused in ways that support creative work without reducing heritage to decoration, luxury consumption, or commercial branding?

The project will develop a design-oriented framework for adaptive reuse that balances heritage value, creative use, community access, and social responsibility. It will not propose full architectural redevelopment plans, but will examine how existing buildings are used, modified, interpreted, and contested. The outcome will be a set of design principles and speculative guidelines for how colonial-era buildings in Hanoi could become inclusive cultural infrastructure rather than exclusive commercial assets.

Abstract
This research investigates how adaptive reuse strategies for colonial-era buildings in Hanoi can support creative communities while preserving architectural and cultural heritage. Hanoi's built environment includes many colonial-era and early modern structures that occupy an uncertain position between heritage, everyday use, commercial redevelopment, and physical decline. Some buildings are officially recognised as valuable heritage, while others remain unlisted but are culturally significant because of their architectural character, social use, or relationship to neighbourhood memory. These buildings are not static historical objects. They are lived, modified, rented, subdivided, repainted, repaired, neglected, commercialised, and reimagined by different users over time.

The research problem is the absence of clear design frameworks that balance material preservation, community use, creative-industry development, and social accessibility. Existing conservation approaches often emphasise the protection of architectural form, façade, material authenticity, or historical value. While these concerns are important, they may not fully address how buildings function as living spaces for contemporary cultural production. Conversely, creative-city strategies often celebrate cultural quarters, design districts, and creative hubs, but may prioritise economic development, tourism, branding, or commercial visibility. This can lead to gentrification, aesthetic commodification, rising rents, and the exclusion of the very creative communities that made the area culturally vibrant.

This project argues that adaptive reuse should be understood as both a design practice and a social process. It asks how older buildings can be adapted in ways that maintain heritage value while supporting affordable, accessible, and meaningful creative use. The study will examine three Hanoi case studies: one officially recognised heritage building, one privately adapted creative space, and one semi-informal community or cultural venue. These contrasting cases will allow the research to compare different models of reuse, governance, access, design intervention, and cultural programming.

The project will use qualitative architectural research methods, including spatial documentation, photographic analysis, mapping, interviews, and policy review. It will examine how creative users occupy and modify heritage spaces, which architectural features are preserved or changed, how public access is managed, and how reuse affects surrounding communities. The research may also produce speculative design guidelines or visual scenarios to illustrate how adaptive reuse could better support creative communities in Hanoi.

The expected contribution is a Vietnam-specific framework for adaptive reuse in creative-industry contexts. This framework will be useful for architects, heritage managers, cultural planners, creative organisations, educators, and local government stakeholders. It will also contribute to broader debates about how cities can protect heritage while allowing buildings to remain active, flexible, and socially relevant.

Research questions in the context of existing research
The main research question is: How can adaptive reuse strategies for colonial-era buildings in Hanoi support creative communities while maintaining heritage value and social accessibility?

This question is supported by several sub-questions. First, which architectural and spatial features of colonial-era and early modern buildings should be preserved when they are adapted for creative use? These may include façades, staircases, courtyards, balconies, roof forms, tiled floors, timber details, ventilation systems, room proportions, street-facing thresholds, and relationships between indoor and outdoor space. Second, how do creative users modify, reinterpret, and activate heritage spaces through everyday practice? Artists, publishers, designers, curators, café owners, studio collectives, and event organisers may use these spaces in ways that differ from both official heritage management and commercial redevelopment. Third, what design principles can prevent adaptive reuse from becoming only a form of commercial gentrification? This includes questions of affordability, public access, community participation, tenant security, and the protection of existing local users. Fourth, how can adaptive reuse recognise both material heritage and intangible cultural value, including atmosphere, memory, social use, and neighbourhood identity?

The project draws on adaptive reuse theory, critical heritage studies, creative city discourse, and spatial justice. Adaptive reuse theory provides concepts for understanding how buildings can change function while retaining cultural, architectural, and environmental value. It also offers a sustainability argument: reusing existing buildings can reduce demolition waste and embodied carbon while extending the life of urban fabric. Critical heritage studies challenge the idea that heritage is only a fixed object from the past. Instead, heritage is understood as a process of selection, interpretation, use, and contestation. This is especially relevant in Hanoi, where colonial-era buildings may carry complex and sometimes uncomfortable histories, but also remain embedded in contemporary Vietnamese urban life.

Creative city discourse is also important, but it must be approached critically. Many cities have attempted to use creativity, culture, and design as tools for urban regeneration. However, these strategies can become exclusionary when creative districts become expensive, tourist-oriented, or dominated by commercial branding. Spatial justice provides a necessary corrective by asking who benefits from adaptive reuse, who is displaced, who has access, and whose cultural practices are valued.

Existing conservation research often prioritises material preservation, while creative city policy often prioritises economic growth. This study addresses the gap between those agendas. It proposes that adaptive reuse should be evaluated not only by how well a building's appearance is preserved, or how much economic activity it generates, but also by whether it supports inclusive cultural life. The project therefore reframes reuse as a negotiation between architecture, memory, creative labour, public access, and urban change.

Significance and impact
The project will develop a Vietnam-specific framework for adaptive reuse in creative-industry contexts. This is significant because decisions about older buildings in Vietnam are often framed as a choice between preservation and development. Preservation can be seen as expensive, restrictive, or disconnected from contemporary needs, while development is often associated with demolition, replacement, or high-end commercial transformation. This project argues for a third pathway: heritage buildings can be activated as living cultural infrastructure.

The academic significance lies in connecting adaptive reuse research with creative community needs and social accessibility. The study will contribute to architectural research by examining how design decisions affect cultural use, public access, and heritage interpretation. It will contribute to heritage studies by treating colonial-era buildings not only as historical objects, but as contested and active urban spaces. It will contribute to creative industries research by analysing the spatial conditions required for independent cultural work in a rapidly changing Vietnamese city.

The practical impact may be useful for architects, cultural planners, heritage managers, creative organisations, and local government stakeholders. The proposed framework could help assess whether an adaptive reuse project genuinely supports creative communities or simply uses creativity as a branding strategy. It could also support more ethical planning for cultural hubs, creative districts, artist studios, independent publishing spaces, and community venues.

The project also has social significance. Adaptive reuse can easily contribute to rising rents, aesthetic commodification, and displacement. A colonial villa turned into a luxury café, boutique hotel, or high-end gallery may preserve a façade while excluding local communities and independent cultural workers. The project therefore critically examines the risks of reuse as well as its benefits. It asks how heritage spaces can remain accessible, affordable, and culturally meaningful rather than becoming symbolic backdrops for elite consumption.

By focusing on Hanoi, the study contributes to a broader conversation about Southeast Asian urban heritage, where colonial histories, postcolonial transformation, market development, and contemporary creative economies overlap. It offers an approach that recognises the complexity of older buildings: they are architectural resources, historical traces, social spaces, and potential platforms for future cultural production.

Methodology and research tasks
The project will use qualitative architectural research. It will analyse three Hanoi case studies: one officially recognised heritage building, one privately adapted creative space, and one semi-informal community or cultural venue. This comparative structure will allow the study to examine different levels of regulation, visibility, funding, public access, and user participation.

The first case study may involve a building with formal heritage recognition or institutional cultural use. This case will help examine how official heritage value is defined and how adaptive reuse is managed through policy, conservation rules, and institutional decision-making. The second case will focus on a privately adapted creative space, such as a studio, café-gallery, independent bookstore, design space, or cultural venue located in an older building. This will show how market forces and creative entrepreneurship shape reuse. The third case will examine a more informal or community-based cultural venue, where adaptation may be temporary, low-cost, improvised, or dependent on local networks.

Research tasks will include architectural documentation, spatial mapping, photographic analysis, interviews, and policy review. Architectural documentation will record building layout, circulation, thresholds, material features, modifications, signs of repair, and relationships between old and new interventions. Spatial mapping will examine how users move through the building, which areas are public or private, where creative activities take place, and how the building connects to the street and neighbourhood. Photographic analysis will document architectural details, atmospheres, modifications, signage, furniture, and traces of use.

Interviews will be conducted with users, managers, designers, cultural workers, residents, or other relevant stakeholders. These interviews will explore why the building was reused, what constraints users face, how heritage value is understood, what forms of creative activity take place, and whether the space remains accessible to different publics. Policy-document review will examine local and national discussions related to heritage conservation, creative industries, urban planning, cultural infrastructure, and building regulation.

The project may also produce speculative design guidelines or visual scenarios. These will not function as final architectural proposals, but as research tools that illustrate possible adaptive reuse principles. For example, visual scenarios may show how a building could support shared studios, public events, community archives, affordable workspaces, temporary exhibitions, or mixed cultural uses while preserving important architectural features.

Particular needs and feasibility
The research requires site access, permission for photography and spatial documentation, participant recruitment, policy-document access, and basic design visualisation tools. Access will be especially important because some buildings may be privately owned, commercially operated, or only partially open to the public. The project will therefore need a careful and flexible recruitment strategy, including contact with venue managers, cultural organisers, creative practitioners, and possibly local heritage or planning stakeholders.

Ethics approval will be required for interviews and for the use of site-based documentation involving identifiable people or sensitive information. The project will need to ensure informed consent, protect participant anonymity where necessary, and avoid exposing informal users or vulnerable tenants to risk. Care will also be needed when discussing colonial-era architecture, property pressures, commercial interests, and possible displacement.

The project is feasible because it uses a small number of bounded case studies and focuses on design principles rather than full architectural implementation. It does not require structural engineering, construction, or large-scale redevelopment modelling. The main research materials can be gathered through field visits, documentation, interviews, and document analysis. Basic visualisation tools such as diagrams, annotated photographs, spatial maps, and speculative design boards will be sufficient.

The proposed scope is appropriate for a research project because it is focused but expandable. Three case studies provide enough comparison to develop a framework, while remaining manageable within available time and resources. The project can produce strong academic outcomes, including a written thesis or article, a typology of adaptive reuse strategies, and a set of practical design guidelines for creative-community use of heritage buildings in Hanoi.`
  },
  {
    title: "Communicating Trust in Vietnamese University AI Policies",
    field: "Professional Communication / Communication and Media Studies / Education",
    closestField: "Communication and Media Studies",
    text: `Title and topic
Communicating Trust in Vietnamese University AI Policies

This project examines how universities communicate generative AI rules, expectations, and guidance to students and staff in multilingual and transnational higher education contexts. It sits at the intersection of professional communication, higher education studies, academic integrity, organisational trust, and digital transformation. The project is concerned not only with what universities decide about generative AI, but how those decisions are communicated across policy documents, teaching resources, assessment briefs, student-facing guidelines, staff advice, and everyday classroom interactions.

Since the rapid public adoption of generative AI tools such as ChatGPT, universities have been required to respond quickly to new questions about learning, authorship, assessment, plagiarism, creativity, productivity, and responsible technology use. Many institutions have developed academic integrity statements, AI-use declarations, assessment rules, staff teaching guides, and student FAQs. However, these communications often appear uneven. A university may officially encourage responsible AI literacy while individual course briefs prohibit AI use. A policy may describe AI as a learning tool, while assessment language frames it mainly as a misconduct risk. A lecturer may invite experimentation, while another may warn students that any AI use is suspicious. These mixed messages can weaken trust and create confusion.

In Vietnam, this issue is especially important because many universities operate in multilingual, transnational, and English-medium education environments. Students may read policy documents in English, discuss expectations with peers in Vietnamese, submit assessments in English, and interpret academic integrity through different educational and cultural experiences. Staff may also receive guidance from international partners, local institutional policies, professional accreditation requirements, and rapidly changing global debates. This creates a complex communication environment in which trust, clarity, and consistency become central concerns.

The project investigates how Vietnamese universities communicate generative AI expectations in ways that students and staff can understand, trust, and act on. It asks how institutional communication can move beyond fear-based or punitive messaging and instead support transparent, pedagogically useful, and culturally sensitive AI guidance.

Abstract
This research investigates how Vietnamese universities communicate policies and guidelines about generative artificial intelligence. Since the public release of tools such as ChatGPT, universities have introduced statements, assessment guidelines, academic integrity rules, teaching resources, declaration forms, and staff development materials. These documents attempt to respond to urgent questions: when is AI use allowed, when is it prohibited, how should students acknowledge it, how should lecturers design assessment, and how should academic integrity be protected? However, many institutional communications remain unclear, inconsistent, overly general, or overly punitive. Students may receive different messages from policy documents, course briefs, lecturers, assessment rubrics, learning management systems, and classroom conversations.

The research problem is not simply that universities need better AI rules. Rather, the problem is that AI rules must be communicated in ways that create shared understanding. A policy may exist, but if students cannot interpret it in relation to their actual assignments, it may not guide behaviour effectively. Similarly, if staff receive broad institutional advice but no discipline-specific examples, they may communicate expectations inconsistently across courses. This can lead to uncertainty, anxiety, accidental misconduct, defensive teaching practices, or a hidden curriculum in which students rely on peer interpretation rather than formal guidance.

In Vietnam, this problem is intensified by multilingual programs, English-medium documents, Vietnamese-language peer discussion, transnational university partnerships, and fast-changing institutional responses. Students may be confident using AI tools but uncertain about whether their use is permitted. They may also struggle to distinguish between acceptable support, such as brainstorming, translation, grammar correction, or coding assistance, and unacceptable substitution of authorship. At the same time, lecturers may want to encourage AI literacy but fear academic misconduct or lack confidence in institutional rules.

The project will analyse how universities communicate trust, responsibility, and academic integrity in relation to AI use. It will examine the language, tone, assumptions, and design of AI-related communication. Particular attention will be paid to whether documents frame students primarily as potential cheaters, responsible learners, emerging professionals, or partners in academic integrity. The study will also investigate whether guidance is accessible, specific, culturally and linguistically clear, and usable in everyday teaching and learning.

The research will use a qualitative methodology across three phases: document analysis, student focus groups, and staff interviews. The outcome will be a practical communication framework for AI guidance in Vietnamese higher education. This framework will support clearer institutional messaging that balances academic integrity with trust, learning, responsibility, and inclusion.

Research questions in the context of existing research
The main research question is: How do Vietnamese universities communicate trust, responsibility, and academic integrity in relation to generative AI use?

This question is supported by several sub-questions. First, what messages about generative AI appear in university policy documents, academic integrity guidelines, assessment briefs, FAQs, staff resources, and student-facing communications? Second, how do students interpret these messages, especially when they encounter differences between institutional policy, lecturer guidance, and peer discussion? Third, how do academic staff and learning designers understand their role in translating AI policy into teaching practice? Fourth, how can universities design clearer, more supportive, and more trustworthy AI communication for multilingual and transnational higher education contexts?

The project draws on professional communication, organisational trust, academic integrity, higher education policy, and discourse analysis. Professional communication provides tools for examining how institutions explain complex rules to diverse audiences. This is important because AI guidance is not only a legal or policy issue; it is also a communication design issue. Students and staff need guidance that is clear, actionable, well-structured, and adapted to specific contexts. Organisational trust is relevant because students are more likely to follow expectations when they perceive institutions as transparent, fair, consistent, and supportive. If communication is confusing or threatening, students may hide AI use rather than disclose it responsibly.

Academic integrity research provides the ethical and educational context for the project. Much existing discussion focuses on misconduct detection, assessment security, authorship, and regulation. These are important concerns, but they do not fully explain how students learn what responsible AI use means. The project therefore shifts attention from enforcement to communication. It asks how integrity expectations are translated into everyday messages that students can apply when completing assignments.

Discourse analysis will allow the study to examine how language constructs particular relationships between universities, staff, students, and technology. For example, documents may use words such as "prohibited," "permitted," "responsible," "ethical," "misconduct," "innovation," "support," "risk," or "transparency." These words do not simply convey information; they shape how AI is understood. A punitive discourse may position students as threats to academic standards. A developmental discourse may position students as learners who need guidance. A professional discourse may frame AI literacy as a graduate capability. The research will compare these framings across different document types and institutional contexts.

Existing research often focuses on regulation, misconduct, AI detection, or technology adoption. This project addresses a gap by examining the communication strategies through which institutional expectations are made understandable and trustworthy. It is especially valuable in the Vietnamese context, where English-medium education, local academic cultures, international standards, and student multilingual practices intersect.

Significance and impact
The study contributes to professional communication by showing how emerging technology policies are translated into everyday institutional communication. Generative AI is a fast-changing issue, but the broader problem is common across organisations: how can institutions communicate uncertainty, risk, responsibility, and trust when rules are still evolving? By focusing on university AI policies, the project offers insights into how complex technological change is managed through communication.

The study contributes to higher education research by moving beyond the question of whether students use AI to examine how universities communicate expectations that students can understand and act on. This shift is significant because unclear communication can create inequality. Students with stronger English proficiency, more institutional knowledge, or closer relationships with lecturers may better understand what is expected. Others may misinterpret rules, overuse AI, avoid useful tools, or feel anxious about accidental misconduct. Clearer communication is therefore not only an administrative issue, but also an equity issue.

The Vietnam context is central. Vietnamese higher education is increasingly shaped by internationalisation, English-medium programs, transnational partnerships, and global graduate employability agendas. In these contexts, students may need to understand AI expectations across different academic cultures. A locally relevant framework is needed because simply importing AI guidance from English-speaking universities may not address Vietnamese students' linguistic realities, classroom practices, or communication needs.

The project may produce a practical communication framework for AI guidance that is transparent, inclusive, and pedagogically useful. This framework could support students, lecturers, learning designers, academic integrity teams, policy teams, and university communication units. It may include principles such as consistency across policy and assessment briefs, clear examples of acceptable and unacceptable AI use, bilingual or plain-language explanations, assignment-specific AI statements, reflective AI-use declarations, and communication that frames students as responsible learners rather than suspected offenders.

The project also has impact beyond AI. It can help universities think more carefully about how policies become meaningful in practice. A policy is only effective when it is understood, trusted, and integrated into teaching. By examining AI communication, the study offers a model for improving institutional communication around other emerging educational technologies and academic integrity challenges.

Methodology and research tasks
The project will use a qualitative methodology across three phases. First, it will conduct discourse analysis of AI-related university documents. These may include public policy statements, academic integrity guidelines, assessment instructions, course briefs, student FAQs, AI-use declaration templates, staff teaching resources, learning management system announcements, and professional development materials. The analysis will examine tone, terminology, consistency, implied audience, examples provided, rules for disclosure, and the balance between risk, trust, learning, and responsibility.

Second, the project will run focus groups with students from selected Vietnamese universities. These focus groups will explore how students interpret institutional AI messages, where they find guidance, which messages they trust, and what kinds of communication they find confusing or helpful. Students may be invited to respond to sample AI guidance statements and explain how they would apply them to real assessment situations. This phase will be important for understanding the gap between policy intention and student interpretation.

Third, the project will conduct interviews with academic staff, learning designers, academic integrity officers, or program managers involved in communicating AI expectations. These interviews will examine how staff interpret institutional policy, how they translate guidance into assessment design, what challenges they face in communicating rules to students, and what support they need. The findings from all three phases will inform a practical framework for AI policy communication.

Data analysis will combine thematic analysis and discourse analysis. Thematic analysis will identify recurring issues, such as confusion, trust, fear of misconduct, inconsistent messages, language barriers, or demand for examples. Discourse analysis will examine how institutional language frames students, staff, AI tools, responsibility, and integrity. Together, these methods will allow the project to connect communication design with lived interpretation.

Particular needs and feasibility
The research requires access to public and internal AI guidance documents, recruitment of students and staff, ethics approval, and bilingual sensitivity in data collection and analysis. Some documents may be publicly available, while others may require institutional permission. The project will need a clear document collection strategy, including dates, institution types, and document categories. Because AI policies change quickly, the research will define a specific collection period and treat policy change itself as part of the communication context.

Ethics approval will be required for focus groups and interviews. Students must not feel that participation could expose their AI use or affect their academic standing. The project should therefore avoid asking participants to confess misconduct and instead focus on how they understand institutional communication. Staff participants should also be protected, especially if they discuss inconsistent policies or institutional uncertainty.

The project is feasible because it uses document analysis and small-scale qualitative research rather than large survey sampling. A manageable sample might include three to five universities, a defined set of AI-related documents, several student focus groups, and a limited number of staff interviews. The main risk is rapid policy change, but this can be managed by establishing a clear timeframe and positioning change as an important finding rather than a problem. Overall, the project is timely, focused, and achievable, with strong potential to produce both academic and practical outcomes.`
  }
];

const proposal = document.querySelector("#proposal");
const wordCount = document.querySelector("#word-count");
const proposalSelect = document.querySelector("#proposal-select");
const proposalFieldMeta = document.querySelector("#proposal-field-meta");
const criteriaList = document.querySelector("#criteria-list");
const averageScore = document.querySelector("#average-score");
const recommendation = document.querySelector("#recommendation");
const finalRecommendation = document.querySelector("#final-recommendation");
const guidanceGrid = document.querySelector("#guidance-grid");
const toast = document.querySelector("#toast");

function renderProposalMenu() {
  proposalSelect.innerHTML = proposals
    .map((item, index) => `<option value="${index}">${index + 1}. ${item.title}</option>`)
    .join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeXml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatProposalText(text) {
  const highlightedHeadings = new Set([
    "abstract",
    "research questions in the context of existing research",
    "significance and impact"
  ]);
  const html = [];
  let paragraphLines = [];

  function flushParagraph() {
    if (!paragraphLines.length) return;
    html.push(`<p>${paragraphLines.map(escapeHtml).join("<br>")}</p>`);
    paragraphLines = [];
  }

  text.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      return;
    }

    if (highlightedHeadings.has(trimmed.toLowerCase())) {
      flushParagraph();
      html.push(`<h3 class="proposal-highlight">${escapeHtml(trimmed)}</h3>`);
      return;
    }

    paragraphLines.push(trimmed);
  });

  flushParagraph();
  return html.join("");
}

function loadProposal(index) {
  const selected = proposals[index];
  proposal.innerHTML = formatProposalText(selected.text);
  proposalFieldMeta.textContent = `Field: ${selected.field}`;
  updateWordCount();
}

function renderCriteria() {
  criteriaList.innerHTML = criteria
    .map((criterion, index) => {
      const id = `criterion-${index}`;
      return `
        <article class="criterion">
          <div class="criterion-head">
            <div>
              <div class="criterion-title">${criterion.title}</div>
            </div>
            <output class="criterion-score" for="${id}" id="${id}-value">3</output>
          </div>
          <p>${criterion.description}</p>
          <div class="level-description" id="${id}-description">${criterion.levels[3]}</div>
          <input id="${id}" type="range" min="1" max="5" step="1" value="3" aria-label="${criterion.title} score">
          <div class="score-scale" aria-hidden="true">
            <span>1 Poor</span>
            <span>3 Average</span>
            <span>5 Very Good</span>
          </div>
          <textarea id="${id}-evidence" placeholder="Evidence from the proposal"></textarea>
        </article>
      `;
    })
    .join("");
}

function renderGuidance() {
  guidanceGrid.innerHTML = criteria
    .map(
      (criterion) => `
      <article class="guidance-card">
        <h3>${criterion.title}</h3>
        <p>${criterion.description}</p>
        <div class="rating-key">
          <span><strong>1 Poor:</strong> ${criterion.levels[1]}</span>
          <span><strong>2 Fair:</strong> ${criterion.levels[2]}</span>
          <span><strong>3 Average:</strong> ${criterion.levels[3]}</span>
          <span><strong>4 Good:</strong> ${criterion.levels[4]}</span>
          <span><strong>5 Very Good:</strong> ${criterion.levels[5]}</span>
        </div>
      </article>
    `
    )
    .join("");
}

function getRecommendation(score) {
  if (score > 4.5) {
    return {
      label: "Strong Accept",
      note: "Accepted as is; no changes required."
    };
  }

  if (score >= 3.5) {
    return {
      label: "Accept",
      note: "Can be accepted after minor improvement based on reviewers' comments; no further review needed."
    };
  }

  if (score >= 3) {
    return {
      label: "Weak Accept",
      note: "Major improvement needed; can be resubmitted for second review."
    };
  }

  return {
    label: "Reject",
    note: "Major flaws in the proposal disqualify the candidate."
  };
}

function updateScores() {
  const sliders = [...document.querySelectorAll('input[type="range"]')];
  const values = sliders.map((slider) => Number(slider.value));
  sliders.forEach((slider) => {
    document.querySelector(`#${slider.id}-value`).textContent = slider.value;
    document.querySelector(`#${slider.id}-description`).textContent =
      criteria[Number(slider.id.replace("criterion-", ""))].levels[Number(slider.value)];
  });

  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  const result = getRecommendation(average);
  averageScore.textContent = average.toFixed(1);
  recommendation.textContent = result.label;
  finalRecommendation.value = `${result.label}: ${result.note}`;
}

function updateWordCount() {
  const words = proposal.innerText.trim().match(/\b[\w'-]+\b/g) || [];
  wordCount.textContent = `${words.length} words`;
}

function switchView(event) {
  const button = event.target.closest(".tab");
  if (!button) return;

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab === button);
  });

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === button.dataset.view);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyFeedback() {
  const field = proposals[Number(proposalSelect.value)].field;
  const lines = [
    `Field: ${field}`,
    `Average score: ${averageScore.textContent}`,
    `Recommendation: ${recommendation.textContent}`,
    "",
    `Strength: ${document.querySelector("#strength").value.trim()}`,
    `Concern: ${document.querySelector("#concern").value.trim()}`,
    `Required revision: ${document.querySelector("#revision").value.trim()}`,
    `Final recommendation: ${finalRecommendation.value.trim()}`,
    "",
    "Criterion evidence:",
    ...criteria.map((criterion, index) => {
      const score = document.querySelector(`#criterion-${index}`).value;
      const evidence = document.querySelector(`#criterion-${index}-evidence`).value.trim();
      return `${criterion.title}: ${score}/5${evidence ? ` - ${evidence}` : ""}`;
    })
  ];

  const feedbackText = lines.join("\n");

  try {
    await navigator.clipboard.writeText(feedbackText);
  } catch (error) {
    const fallback = document.createElement("textarea");
    fallback.value = feedbackText;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.left = "-9999px";
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }

  showToast("Feedback copied");
}

function getReviewPayload() {
  const selected = proposals[Number(proposalSelect.value)];
  return {
    proposalTitle: selected.title,
    field: selected.field,
    average: Number(averageScore.textContent),
    recommendation: recommendation.textContent,
    scores: criteria.map((criterion, index) => Number(document.querySelector(`#criterion-${index}`).value)),
    evidence: criteria.map((criterion, index) => {
    const score = Number(document.querySelector(`#criterion-${index}`).value);
    const evidence = document.querySelector(`#criterion-${index}-evidence`).value.trim();

      return {
        criterion: criterion.title,
        score,
        evidence
      };
    }),
    feedback: {
      strength: document.querySelector("#strength").value.trim(),
      concern: document.querySelector("#concern").value.trim(),
      revision: document.querySelector("#revision").value.trim(),
      finalRecommendation: finalRecommendation.value.trim()
    }
  };
}

async function saveReview() {
  const payload = getReviewPayload();
  const response = await fetch("/export-review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    showToast("Export server unavailable");
    return;
  }

  const blob = await response.blob();
  const link = document.createElement("a");
  const disposition = response.headers.get("Content-Disposition") || "";
  const match = disposition.match(/filename="([^"]+)"/);
  link.href = URL.createObjectURL(blob);
  link.download = match ? match[1] : "phd-proposal-review.xlsx";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  showToast("Review exported");
}

renderCriteria();
renderGuidance();
renderProposalMenu();
loadProposal(0);
updateScores();

document.querySelector(".tabs").addEventListener("click", switchView);
document.querySelector("#copy-feedback").addEventListener("click", copyFeedback);
document.querySelector("#save-review").addEventListener("click", saveReview);
proposalSelect.addEventListener("change", (event) => loadProposal(Number(event.target.value)));
proposal.addEventListener("input", updateWordCount);
criteriaList.addEventListener("input", updateScores);
