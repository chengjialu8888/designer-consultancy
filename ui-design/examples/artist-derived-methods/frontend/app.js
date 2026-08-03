const screens = {
  "leonora-carrington": {
    label: "Leonora Carrington Style",
    render: () => `
      <section class="screen carrington">
        <aside class="rail">
          <div class="mark">TA</div>
          <nav><a class="active">Archive</a><a>Rituals</a><a>Rooms</a><a>Agents</a></nav>
          <button class="icon-button" aria-label="Open settings">+</button>
        </aside>
        <div class="surface">
          <header class="topbar"><span>Threshold Archive</span><div><button class="quiet">Index</button><button>Enter room</button></div></header>
          <div class="carrington-grid">
            <section class="intro"><p class="eyebrow">ROOM 07 / THE ROOT OFFICE</p><h1>Every document planted here grows a second history.</h1><p>Follow the witnesses, inspect the material trace, and choose which version crosses the threshold.</p><div class="agent-row"><span>Witness 03</span><span>Root clerk</span><span>Glass carrier</span></div></section>
            <section class="threshold-visual" aria-label="Transformation map"><img class="content-art" src="../assets/content/leonora-carrington.jpg" alt="An archive room where paper becomes roots and a key becomes a bird"><span class="object-label label-a">paper / root</span><span class="object-label label-b">key / witness</span><span class="object-label label-c">threshold active</span></section>
            <section class="ritual-list"><div class="section-head"><h2>Active transformations</h2><span>03</span></div><ol><li><b>Paper to root</b><small>Pressure: unanswered request</small></li><li><b>Key to witness</b><small>Boundary: private / shared</small></li><li><b>Room to tribunal</b><small>Consequence: collective memory</small></li></ol></section>
            <section class="decision"><span>WORLD LAW</span><p>No record can be opened twice in the same form.</p><button>Choose a consequence</button></section>
          </div>
        </div>
      </section>`
  },
  doraemon: {
    label: "Fujiko F. Fujio Visual Narrative Style",
    render: () => `
      <section class="screen fujiko">
        <header class="fujiko-nav"><a class="wordmark">Pocket Lab</a><nav><a class="active">Build</a><a>Stories</a><a>Notebook</a></nav><div class="streak">4 day streak</div></header>
        <main class="fujiko-main">
          <section class="mission"><p class="eyebrow">TODAY'S MISSION</p><h1>Help a balcony garden remember the rain.</h1><p>Build one ordinary object with one surprising rule. Then test what happens when the rule goes too far.</p><button>Continue experiment <span>→</span></button></section>
          <section class="device-card"><div class="device"><img class="content-art" src="../assets/content/doraemon.jpg" alt="A child clips an original weather-memory device to a balcony basil plant"></div><div class="device-copy"><span>YOUR OBJECT</span><h2>Memory Sprout</h2><p>Hums when the soil recalls water.</p></div></section>
          <section class="story-strip"><article><span>1</span><div class="mini-scene ordinary"><img src="../assets/content/doraemon.jpg" alt="The balcony garden before the experiment"></div><h3>Desire</h3><p>The basil dries out.</p></article><article><span>2</span><div class="mini-scene action"><img src="../assets/content/doraemon.jpg" alt="The child attaches the device"></div><h3>Operation</h3><p>Clip on the sprout.</p></article><article class="current"><span>3</span><div class="mini-scene success"><img src="../assets/content/doraemon.jpg" alt="The device listens for rain"></div><h3>First success</h3><p>It remembers rain.</p></article><article><span>4</span><div class="mini-scene consequence"><img src="../assets/content/doraemon.jpg" alt="The whole balcony responds to the experiment"></div><h3>Consequence</h3><p>The whole room listens.</p></article></section>
          <footer class="lab-footer"><span>Contrast checked</span><span>Keyboard ready</span><span>Original object system</span></footer>
        </main>
      </section>`
  },
  "jackson-pollock": {
    label: "Jackson Pollock Style",
    render: () => `
      <section class="screen pollock">
        <header class="studio-bar"><div class="studio-brand"><b>FIELD</b><span>motion studio</span></div><div class="transport"><button>◀</button><button class="play">▶</button><span>00:18:42</span></div><button class="export">Export field</button></header>
        <main class="pollock-workspace">
          <section class="field-wrap"><div class="field-meta"><span>CAMPAIGN 04 / GRAVITY STUDY</span><span>1200 × 800</span></div><img class="field-art" src="../assets/content/jackson-pollock.jpg" alt="A material trajectory field with distinct drips, stains, scrapes, and quiet zones"><div class="field-legend"><span><i class="cyan"></i>long trajectory</span><span><i class="pink"></i>local contact</span><span><i class="lime"></i>correction</span></div></section>
          <aside class="controls"><div class="panel-title"><h1>Field behavior</h1><span>LIVE</span></div><label>Flow <output>64</output><input type="range" value="64"></label><label>Gravity <output>38</output><input type="range" value="38"></label><label>Continuity <output>77</output><input type="range" value="77"></label><div class="line-families"><h2>Line families</h2><button><i class="cyan"></i><span>Drift / continuous</span><b>01</b></button><button><i class="pink"></i><span>Contact / short</span><b>02</b></button><button><i class="lime"></i><span>Revision / drag</span><b>03</b></button></div><div class="density"><h2>Density map</h2><div class="density-grid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div><button class="step-back">Step back and read</button></aside>
        </main>
      </section>`
  },
  "lucian-freud": {
    label: "Lucian Freud Style",
    render: () => `
      <section class="screen freud">
        <aside class="freud-side"><div class="freud-mark">SL</div><nav><a class="active">Sittings</a><a>Subjects</a><a>Rooms</a><a>Rights</a></nav><div class="consent"><span>CONSENT STATUS</span><b>Active</b><small>Reviewed 14 May</small></div></aside>
        <main class="freud-main">
          <header><div><p>OBSERVATION LOG / 12</p><h1>Mara, afternoon sitting</h1></div><button>Record change</button></header>
          <div class="freud-grid">
            <section class="figure-map"><div class="room"><img class="content-art" src="../assets/content/lucian-freud.jpg" alt="An older woman seated by a window in a materially observed studio"><span class="pressure pressure-a">weight</span><span class="pressure pressure-b">support</span><span class="pressure pressure-c">gaze</span></div><div class="scale"><span>ROOM</span><i></i><span>CONTACT</span></div></section>
            <section class="session-notes"><div class="section-head"><h2>Observed change</h2><span>42 min</span></div><article><time>14:10</time><p>Left shoulder releases after the chair is moved closer to the window.</p></article><article><time>14:32</time><p>Gaze shifts toward the door; crop widened to preserve the reason for looking.</p></article><div class="agency"><span>SUBJECT CONTROL</span><b>Name approved</b><b>Pose self-chosen</b><b>Final review pending</b></div></section>
            <section class="contact-map"><h2>Contact and pressure</h2><div class="contact-row"><span>Chair / back</span><i style="--w:78%"></i><b>78</b></div><div class="contact-row"><span>Foot / floor</span><i style="--w:61%"></i><b>61</b></div><div class="contact-row"><span>Hand / knee</span><i style="--w:44%"></i><b>44</b></div></section>
          </div>
        </main>
      </section>`
  },
  "lucio-fontana": {
    label: "Lucio Fontana Style",
    render: () => `
      <section class="screen fontana">
        <header class="fontana-bar"><b>SPATIAL / 01</b><nav><a class="active">Surface</a><a>Light</a><a>Route</a></nav><button>Preview room</button></header>
        <main class="fontana-main">
          <section class="spatial-canvas"><div class="canvas-title"><span>MEMBRANE A</span><span>1:12 SCALE</span></div><div class="membrane"><img class="content-art" src="../assets/content/lucio-fontana.jpg" alt="A visitor approaches a coral spatial membrane opening into cobalt depth"><span class="measure top">820 mm</span><span class="measure side">1460 mm</span></div><div class="visitor-path"><i></i><span>Entry</span><span>Reveal</span><span>Return</span></div></section>
          <aside class="fontana-panel"><p class="eyebrow">SPATIAL PROPOSITION</p><h1>A surface becomes a threshold only when the visitor moves.</h1><div class="stage-list"><button class="done"><span>01</span><b>Prepare</b><small>Tension + backing</small></button><button class="active"><span>02</span><b>Open</b><small>Edge + depth</small></button><button><span>03</span><b>Illuminate</b><small>Angle + spill</small></button><button><span>04</span><b>Complete</b><small>Body + route</small></button></div><div class="light-control"><label>Backlight angle <b>28°</b></label><input type="range" value="28"><div><span class="swatch coral"></span><span class="swatch blue"></span><span class="swatch ink"></span></div></div></aside>
        </main>
      </section>`
  },
  "gustav-klimt": {
    label: "Gustav Klimt Style",
    render: () => `
      <section class="screen klimt">
        <aside class="klimt-nav"><div class="klimt-logo">MF</div><nav><a class="active">Compose</a><a>Motifs</a><a>Materials</a><a>Export</a></nav><small>MOTIF FOUNDRY<br>VERSION 2.4</small></aside>
        <main class="klimt-main">
          <header><div><p>CAMPAIGN SYSTEM / BOTANICA</p><h1>Living anchor, roaming field</h1></div><button>Generate variants</button></header>
          <section class="klimt-workspace"><div class="anchor-stage"><img class="content-art" src="../assets/content/gustav-klimt.jpg" alt="A botanist held as a living anchor inside a roaming botanical motif field"><div class="focus-tag">ANCHOR 62%</div></div><aside class="motif-panel"><div class="tabs"><button class="active">Grammar</button><button>Tokens</button></div><div class="motif-rule"><span>M01</span><div class="motif m-grid"></div><p><b>Grid bloom</b><small>Scale 24 / repeat 3</small></p></div><div class="motif-rule"><span>M02</span><div class="motif m-eye"></div><p><b>Watching leaf</b><small>Rotate 18 / gap 8</small></p></div><div class="motif-rule"><span>M03</span><div class="motif m-ring"></div><p><b>Broken orbit</b><small>Stroke 2 / offset 6</small></p></div><div class="material-row"><span>MATTE BLACK</span><span>BRASS FOIL</span><span>OXIDE GREEN</span></div></aside></section>
        </main>
      </section>`
  },
  "pieter-bruegel": {
    label: "Pieter Bruegel the Elder Style",
    render: () => `
      <section class="screen bruegel">
        <header class="bruegel-bar"><div><b>COMMON GROUND</b><span>North district</span></div><nav><a class="active">Map</a><a>Work</a><a>Weather</a></nav><button>Log activity</button></header>
        <main class="bruegel-main">
          <section class="world-map"><img class="content-art" src="../assets/content/pieter-bruegel.jpg" alt="A high-view community garden where many people prepare for approaching rain"><div class="weather"><span>14°C</span><b>Rain in 38 min</b><small>Wind NE 12 km/h</small></div><div class="work-node n1"><b>8</b><span>Seed library</span></div><div class="work-node n2"><b>3</b><span>Drain repair</span></div><div class="work-node n3"><b>12</b><span>Harvest crew</span></div><div class="work-node n4"><b>5</b><span>Tool share</span></div><div class="map-caption"><span>HIGH VIEW</span><p>Weather changes the work before it changes the landscape.</p></div></section>
          <aside class="bruegel-panel"><div class="section-head"><h1>Work before rain</h1><span>28 people</span></div><div class="verb-list"><article><b>Repair</b><span>South channel</span><time>18 min</time></article><article><b>Carry</b><span>Seed house → beds</span><time>12 min</time></article><article><b>Cover</b><span>East orchard</span><time>34 min</time></article><article><b>Share</b><span>Tool shed</span><time>Now</time></article></div><div class="season"><span>SEASONAL ENGINE</span><div><i></i><i></i><i class="active"></i><i></i><i></i></div><small>Rain changes 7 active tasks</small></div></aside>
        </main>
      </section>`
  },
  "hans-holbein": {
    label: "Hans Holbein the Younger Style",
    render: () => `
      <section class="screen holbein">
        <aside class="holbein-nav"><div class="seal">OR</div><nav><a class="active">Profile</a><a>Evidence</a><a>Versions</a><a>Rights</a></nav><button>New record</button></aside>
        <main class="holbein-main">
          <header><p>OFFICE OF RECORD / VERIFIED PROFILE</p><div><h1>Dr. Amara Vale</h1><span>Coastal Mapping Director</span></div></header>
          <div class="holbein-grid"><section class="portrait-record"><div class="portrait"><img class="content-art" src="../assets/content/hans-holbein.jpg" alt="A coastal mapping director with a calibration wheel, chart, and institutional evidence objects"></div><div class="record-id"><span>RECORD 0841</span><b>Identity confidence 94%</b></div></section><section class="evidence-stack"><div class="section-head"><h2>Evidence objects</h2><button>Review all</button></div><article><span>01</span><div><b>Tidal calibration wheel</b><small>Role-bearing / verified</small></div><em>High</em></article><article><span>02</span><div><b>Field chart, sector 7</b><small>Authorship / attributed</small></div><em>Med</em></article><article><span>03</span><div><b>Institute seal</b><small>Office / current</small></div><em>High</em></article><div class="uncertainty"><span>BOUNDED UNCERTAINTY</span><p>One chart remains attributed to the wider survey team. Public copy preserves that distinction.</p></div></section><section class="material-key"><span>FACE / SOFT VALUE</span><span>METAL / HARD SPECULAR</span><span>PAPER / FOLD + INK</span><span>TEXTILE / LONG LIGHT</span></section></div>
        </main>
      </section>`
  },
  titian: {
    label: "Titian Style",
    render: () => `
      <section class="screen titian">
        <header class="titian-bar"><div><b>CHROMA / STORY LAB</b><span>Departure campaign</span></div><div class="version-tabs"><button>V1</button><button>V2</button><button class="active">V3</button></div><button class="approve">Send for review</button></header>
        <main class="titian-main">
          <aside class="layer-stack"><h2>Chromatic build</h2><article><i class="layer l5"></i><div><b>Selective light</b><small>hands + metal</small></div><span>82%</span></article><article><i class="layer l4"></i><div><b>Scumbled air</b><small>distance + rain</small></div><span>46%</span></article><article><i class="layer l3"></i><div><b>Transparent depth</b><small>coat + water</small></div><span>71%</span></article><article><i class="layer l2"></i><div><b>Opaque structure</b><small>figures + ferry</small></div><span>100%</span></article><article><i class="layer l1"></i><div><b>Warm ground</b><small>visible at edges</small></div><span>100%</span></article></aside>
          <section class="titian-stage"><div class="scene"><img class="content-art" src="../assets/content/titian.jpg" alt="A rainy ferry departure at the irreversible second when the rope falls"><span>ONE SECOND BEFORE DEPARTURE</span></div><div class="distance-check"><button class="active">Close</button><button>Normal</button><button>Thumbnail</button><p>Hands and gangway hold the irreversible second.</p></div></section>
          <aside class="touch-contract"><h2>Touch contracts</h2><div><span>Wet coat</span><b>broken highlight</b></div><div><span>Metal rail</span><b>small hard light</b></div><div><span>Water</span><b>horizontal drag</b></div><div><span>Skin</span><b>warm / cool turn</b></div><section><span>THRESHOLD SENTENCE</span><p>When the rope falls, neither person can revise the goodbye.</p></section></aside>
        </main>
      </section>`
  },
  "edvard-munch": {
    label: "Edvard Munch Style",
    render: () => `
      <section class="screen munch">
        <header class="munch-bar"><div><b>DISTANCE / STATE</b><span>Journey editor</span></div><nav><a class="active">Sequence</a><a>Relations</a><a>Versions</a></nav><button>Preview path</button></header>
        <main class="munch-main">
          <section class="state-header"><p>RELATIONAL ARC / 05 STATES</p><h1>What remains after two people stop walking together?</h1><div class="arc-meta"><span>Primary vector: retreat</span><span>Critical interval: 18 m</span><span>Exit afterimage: shoreline</span></div></section>
          <section class="state-strip"><article><span>01</span><div class="relation r-approach"><img src="../assets/content/edvard-munch.jpg" alt="Two figures held apart by a winter shoreline"></div><h2>Approach</h2><p>Vectors converge.</p></article><article><span>02</span><div class="relation r-contact"><img src="../assets/content/edvard-munch.jpg" alt="The critical interval between two figures"></div><h2>Contact</h2><p>The interval closes.</p></article><article class="active"><span>03</span><div class="relation r-friction"><img src="../assets/content/edvard-munch.jpg" alt="A rail blocks connection between the figures"></div><h2>Friction</h2><p>One line refuses.</p></article><article><span>04</span><div class="relation r-separate"><img src="../assets/content/edvard-munch.jpg" alt="One figure retreats along the shore"></div><h2>Separation</h2><p>The rail takes over.</p></article><article><span>05</span><div class="relation r-after"><img src="../assets/content/edvard-munch.jpg" alt="The shoreline remains after separation"></div><h2>Aftereffect</h2><p>Only direction remains.</p></article></section>
          <footer class="munch-footer"><div><span>VERSION VARIABLE</span><button class="active">Distance</button><button>Crop</button><button>Medium</button><button>Order</button></div><div class="line-verbs"><span>LINE VERBS</span><b>connect</b><b>block</b><b>retreat</b><b>echo</b></div></footer>
        </main>
      </section>`
  }
};

const params = new URLSearchParams(window.location.search);
const requested = params.get("style") || "leonora-carrington";
const key = Object.hasOwn(screens, requested) ? requested : "leonora-carrington";
document.title = `${screens[key].label} · Frontend Method`;
document.body.dataset.style = key;
document.getElementById("app").innerHTML = screens[key].render();
