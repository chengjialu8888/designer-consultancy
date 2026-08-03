# Titian 视觉风格综合（Phase 2）

综合日期：2026-08-03
证据底座：本目录 Phase 1 的 6 份研究文档与 `sources.md`；方法依据为 `extraction-framework.md`。
适用范围：为后续 Titian 风格 skill 提供可运行的视觉决策系统；本文件不是作品鉴定意见，也不把某一件作品的配方外推为提香全部生涯的固定程序。

## 0. 综合结论

【研究推断】Titian 的可迁移核心不是一组“威尼斯宝石色”，而是一套让图像持续可修订的建构方法：底稿先给方向，颜色层、罩染、擦涂和边缘在画面中继续决定形体；不同材料获得不同触法；局部完成度服从叙事、观看距离与长期修订。这个方法既能产生早期的清晰高色度，也能产生晚期的开放表面，因此不能把生涯压缩成“早期精细、晚期潦草”。

【研究推断】作者性也应作为视觉系统的一部分处理。构思、底层执行、关键修订、收束与签名可能分布在 Titian 与工作室之间；“亲笔/工作室/可能为/后期变体”是一条连续谱，而不是把每幅画强行分成“天才本人”或“助手仿品”。

优先证据：National Gallery 的 [1540 年前技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/titian-s-painting-technique-to-c-1540-1)、[1540 年后技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/technical-bulletin-volume-36/titian-after-1540-technique-and-style-in-his-later-works)、[《阿克泰翁之死》学术目录](https://www.nationalgallery.org.uk/paintings/catalogues/penny-2008/the-death-of-actaeon)及 [三幅作品的清理与修复研究](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/recovering-titian-the-cleaning-and-restoration-of-three-overlooked-canvas-paintings)。

## 1. 三重验证方法

每个视觉心智模型必须同时满足：

1. **跨情境复现**：至少见于两个作品、媒介功能或职业时期，且不以单幅特例冒充规律。
2. **有生成力**：能对新构图、图像、界面或视觉系统给出具体决策，而非只描述既有作品。
3. **有排他性**：能区别于相邻的 Florentine disegno、Giorgionesque 融合、Tintoretto 式戏剧速写、Veronese 式华丽舞台、印象派即时笔触或一般“复古油画”效果。

以下 6 个模型全部通过。模型本身均为【研究推断】；其下证据按【一手/官方】或【权威二手】标记。

## 2. 命名视觉心智模型（6）

### M1. 色层构形（Chromatic Construction）

**一句定义**：先让底稿提供可移动的骨架，再由不透明色层、半透明罩染、擦涂、邻色和软硬边协同完成体积、温度与焦点，而不是先封死轮廓再“填色”。

**证据情境 A：早期至约 1540**
【一手/官方】National Gallery 的技术研究在多幅早期作品中发现画笔底稿、imprimitura、局部改动和不同透明度的叠层，修正了“威尼斯人无底稿、只靠颜色即兴”的旧说；《巴克斯与阿里阿德涅》又显示高纯度颜料常被空间分隔，并以 glaze、邻色和贯穿画面的暖肤色组织整体，而非一张无层次的高饱和色卡。来源：[技术综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/titian-s-painting-technique-to-c-1540-1)、[《巴克斯与阿里阿德涅》](https://www.nationalgallery.org.uk/paintings/titian-bacchus-and-ariadne)。

**证据情境 B：晚期 poesie**
【一手/官方】《欧罗巴被劫》以黑色画笔底稿、薄而经济的层次、局部裸露底色、肤色 scumble、红绸湿碰湿和 lake glaze 协同构形；它说明晚期松动仍然依赖层次控制，不等于直接用模糊厚涂覆盖画布。来源：[Gardner 技法近观](https://www.gardnermuseum.org/blog/titians-technique-our-conservators-closer-look)、[National Gallery 晚期技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/technical-bulletin-volume-36/titian-after-1540-technique-and-style-in-his-later-works)。

**可迁移应用**：先建立价值、温度和空间角色，再决定局部色相；允许底层从边缘或薄层中透出；用 glaze 加深、scumble 提亮或降清晰度；把最硬的边、最不透明的亮部和最高色度集中在叙事锚点。用于 UI 时，应转译为“结构色 + 层次 + 边缘权重”，不能只抽取五色 palette。

**相邻风格区别**：它不同于 disegno 优先的封闭轮廓，也不同于现代平涂色块、统一滤镜或纯粹光学印象；颜色同时是结构、材料与空间操作。

**限制**：不能据单幅颜料分析推出固定配方；smalt 失色、清漆泛黄、磨损与清理会改变今天看到的色温、暗部和层次。来源：[《欧罗巴》守恒项目](https://www.gardnermuseum.org/experience/titian-restoration-2019)。

### M2. 可逆画布（Revisable Canvas）

**一句定义**：把画布视为可持续试演的场域，通过 pentimenti 调整目光、手势、身体距离、景观和事件因果，让叙事关系在作画过程中成熟。

**证据情境 A：早期宗教画**
【一手/官方】《不要碰我》的技术个案显示人物与景观关系在作画中被重新安排；改动不是失误清单，而是使基督的回避动作、抹大拉的趋近和两者之间的张力更清楚。来源：[National Gallery catalogue PDF，cats 1–7](https://www.nationalgallery.org.uk/upload/pdf/vol-34-cat-1-to-7-2013.pdf)、[作品页](https://www.nationalgallery.org.uk/paintings/titian-noli-me-tangere)。

**证据情境 B：中晚期神话画**
【一手/官方】《戴安娜与阿克泰翁》可见手臂、帷幕及人物关系的改动；《阿克泰翁之死》则经历多年修订，底稿与可见表面之间存在显著偏移。两者都以距离、视线和触碰重写“发现—惩罚”的事件链。来源：[《戴安娜与阿克泰翁》](https://www.nationalgallery.org.uk/paintings/titian-diana-and-actaeon)、[《阿克泰翁之死》目录](https://www.nationalgallery.org.uk/paintings/catalogues/penny-2008/the-death-of-actaeon)。

**可迁移应用**：为新视觉先做关系版本而非装饰版本：每轮只改变一组关键变量，如谁看谁、谁触碰谁、前后距离、遮挡、进入或退出方向；保留使最终关系更有力的版本。数字媒介可用版本历史实现“可逆”，不必伪造可见 pentimento。

**相邻风格区别**：它不同于一次性封稿的线性制作，也不同于把草率、擦除痕迹或随机噪点当作“有过程感”；修订必须改变叙事和空间关系。

**限制**：pentimento 只能证明发生过改动，不能单独证明亲笔；底层图像、后期修复和工作室接力可能并存。来源：[《带鸟男孩》](https://www.nationalgallery.org.uk/paintings/titian-or-workshop-of-titian-a-boy-with-a-bird)。

### M3. 材质异笔（Material-Specific Touch）

**一句定义**：让笔触的长度、干湿、方向、厚薄和覆盖度服从皮肤、丝、天鹅绒、薄纱、金属、毛发或景观各自的光学行为，而非用同一种“油画感”刷遍所有对象。

**证据情境 A：肖像中的皮肤与服饰**
【一手/官方】《青年男子肖像》以柔和转折建立皮肤，以宽而连续的触法表现黑丝，以短而偏干的触法表现红天鹅绒；材质差异同时服务身份、姿态和瞬时动作。来源：[作品页](https://www.nationalgallery.org.uk/paintings/titian-portrait-of-a-young-man)、[1540 年前 catalogue PDF，cats 8–13](https://www.nationalgallery.org.uk/upload/pdf/vol-34-cat-8-to-13-2013.pdf)。

**证据情境 B：宗教与神话画中的薄纱、红绸和肤色**
【一手/官方】《不要碰我》用拖曳的 lead white 表现薄纱；《欧罗巴被劫》的红绸结合湿碰湿、透明红 lake 与含铅高光，肤色则以暖冷层、擦涂和露底形成。来源：[《不要碰我》](https://www.nationalgallery.org.uk/paintings/titian-noli-me-tangere)、[Gardner 技法近观](https://www.gardnermuseum.org/blog/titians-technique-our-conservators-closer-look)。

**可迁移应用**：给每种材质写一条“触法契约”：例如皮肤以暖冷过渡和少量软边塑形，丝以长亮带和方向突变折射，天鹅绒以短干触吸收光，薄纱以露底和拖白提示透明；在数字设计中可转成局部纹理尺度、光泽响应和边缘锐度。

**相邻风格区别**：它区别于统一 impasto、统一颗粒、全局纸纹或一键油画滤镜；Titian 式丰富来自不同表面之间的对比，而非处处“很有笔触”。

**限制**：材质触法不是固定笔刷预设；同一材料会因光线、距离、年代和保存状态改变处理，且可读性优先于纹理炫技。

### M4. 转折组诗（Threshold Poesie）

**一句定义**：把叙事锁定在不可逆转的临界瞬间，并在成对或成组作品中通过身体朝向、视点、色温、景观和事件阶段做反复变奏，而不是复制同一模板。

**证据情境 A：委托与系列构思**
【一手/官方】1553–1554 年书信把神话画称为 poesie，并讨论为 camerino 安排正面与背面身体，以相反方向形成观看变化；Prado 同时提醒，这组项目可能由 Titian 与 Philip II 共同塑造，不能只写成不受约束的艺术家独白。来源：[Prado《维纳斯与阿多尼斯》](https://www.museodelprado.es/en/the-collection/art-work/venus-and-adonis/bc9c1e08-2dd7-44d5-b926-71cd3e5c3adb)、[National Gallery 委托研究](https://www.nationalgallery.org.uk/exhibitions/past/titian-love-desire-death/titian-s-poesie-the-commission)。

**证据情境 B：发现、追逐与死亡的连续变奏**
【一手/官方】《戴安娜与阿克泰翁》选择越界被发现的一刻，《阿克泰翁之死》选择惩罚已不可逆的一刻；两作以不同距离、运动方向、景观密度和身体状态构成跨画面的后果链。来源：[《戴安娜与阿克泰翁》](https://www.nationalgallery.org.uk/paintings/titian-diana-and-actaeon)、[《阿克泰翁之死》目录](https://www.nationalgallery.org.uk/paintings/catalogues/penny-2008/the-death-of-actaeon)。

**可迁移应用**：为叙事图像先写“门槛句”：“再过一秒就无法回到原状”；系列中的每幅至少改变两个结构变量，并让前一幅的视线、动作或色彩在后一幅得到回应、反转或后果。

**相邻风格区别**：它不同于把裸体、帷幕、猎犬和古典道具拼成“文艺复兴风”；也不同于 Veronese 式以盛大舞台和社会群像为首要组织。Titian 的重心在身体关系与事件不可逆性。

**限制**：神话图像涉及欲望、强迫、追逐、惩罚与暴力，不能只作为奢华情色装饰；具体含义应服从原典、委托语境和当代伦理说明，而不是假定单一观看立场。

### M5. 双距离完成（Dual-Distance Finish）

**一句定义**：近看允许笔触、擦痕、露底和未闭合边缘保留物质性，远看则让色块、轮廓节奏与少量锐利锚点重新合成为清晰事件；晚期松动是长期修订后的选择性完成，不是即时潦草。

**证据情境 A：同时代观看证言与跨期变化**
【权威二手】Vasari 对 Titian 晚作“近看难辨、远看合成”的描述，与他所说表面快速、实际反复劳动的悖论相连；National Gallery 的技术综述进一步表明，约 1540 后的完成度高度可变，并非按年代单向变粗。来源：[Getty《Lives of Titian》访谈 transcript](https://www.getty.edu/podcasts/art-and-ideas/lives-of-titian/)、[National Gallery 晚期技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/technical-bulletin-volume-36/titian-after-1540-technique-and-style-in-his-later-works)。

**证据情境 B：受控晚作与开放晚作并存**
【一手/官方】约 1560 年代的《欧罗巴被劫》仍有精确材料差异、薄层控制和高光收束；长期修订的《阿克泰翁之死》则保留更开放、擦涂和争议性的完成状态。二者同属晚期，却证明“晚期”不是一个统一模糊滤镜。来源：[Gardner 技法近观](https://www.gardnermuseum.org/blog/titians-technique-our-conservators-closer-look)、[《阿克泰翁之死》目录](https://www.nationalgallery.org.uk/paintings/catalogues/penny-2008/the-death-of-actaeon)。

**可迁移应用**：在近距、正常距和缩略图三档检查作品；只在眼睛、手、武器、饰物、亮边或关键接触点放置少量高锐度锚点，其余区域按叙事重要性选择闭合或开放；开放区域应显示层次和方向，而不是平均模糊。

**相邻风格区别**：它不同于 Impressionist 式以即时光感为主要命题，也不同于 Rothko 式取消具象叙事的色域，更不同于数字景深滤镜；它始终让远距事件可读，并由长期返工支持表面自由。

**限制**：所谓 non finito 可能是有意开放、实际未完、磨损、失色、后人修整或工作室状态中的一种或多种；没有技术证据时必须写“开放/未收束表面”，不能断言“故意未完成”。

### M6. 分布式作者性（Distributed Authorship）

**一句定义**：把构思、底稿、重复版本、局部执行、关键修订、最后高光和批准视为可在 master 与 workshop 间分配的阶段，从视觉证据与来源链评估程度，而非追求单一手迹神话。

**证据情境 A：变体与工作室版本**
【一手/官方】《维纳斯与阿多尼斯》约有 30 个相关版本，先后、亲笔程度和工作室参与持续有争议；这说明成功构图可以在工作室中被保存、变更和重新投入不同委托。来源：[National Gallery of Art 学术目录](https://www.nga.gov/research/publications/italian-paintings-sixteenth-century-0/italian-paintings-sixteenth-century-venus-and-adonis-c-1540sc-1560-1565)、[Titian 学术条目](https://www.nga.gov/artists/1932-titian)。

**证据情境 B：混合手笔与保留归属**
【一手/官方】《Titian's Mistress》的守恒研究提出 master/assistant 局部分工；National Gallery 对《音乐课》使用“Possibly by Titian”，对《带鸟男孩》使用“Titian or workshop”，并明确 pentimenti、签名或复杂底层都不足以单独封案。来源：[English Heritage 守恒研究](https://www.english-heritage.org.uk/visit/places/apsley-house/history/significance/conservation-titian-painting/)、[《音乐课》](https://www.nationalgallery.org.uk/paintings/possibly-by-titian-the-music-lesson)、[《带鸟男孩》](https://www.nationalgallery.org.uk/paintings/titian-or-workshop-of-titian-a-boy-with-a-bird)。

**可迁移应用**：把复杂视觉生产拆成“发明—展开—校准—收束—审阅”五个责任层；允许多人或生成工具参与，但记录谁决定构图、谁执行表面、谁做最终选择，并在输出中区分“基于 Titian 原作”“基于工作室变体”“综合推演”。

**相邻风格区别**：它区别于浪漫化的孤独天才模型，也区别于无责任归属的风格批量复制；重点是可追溯的控制层级和关键修订。

**限制**：这是生产与归属的解释模型，不是从像素自动鉴定真伪的方法；具体作品仍需出处、技术检测、保存史和学术共识共同判断。

## 3. 决策启发式（9）

### H1. 先写颜色的工作，再选颜色

【研究推断】在取色前给每种颜色分配结构角色：推进或后退、塑造肤色、连接空间、标记叙事、描述材料。若答案只是“华丽、复古、威尼斯”，则尚未进入 colorito。证据：[National Gallery 1540 年前技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/titian-s-painting-technique-to-c-1540-1)。

### H2. 每轮修订只动一个关系问题

【研究推断】构图不成立时，优先分别测试目光、手势、遮挡、前后距离或进入方向，不先增加装饰；保留能改变事件因果的版本。证据：[《戴安娜与阿克泰翁》](https://www.nationalgallery.org.uk/paintings/titian-diana-and-actaeon)、[《阿克泰翁之死》目录](https://www.nationalgallery.org.uk/paintings/catalogues/penny-2008/the-death-of-actaeon)。

### H3. 一种材质，一套触法契约

【研究推断】同一画面至少区分皮肤、吸光织物、反光织物和透明物的边缘、纹理尺度与高光方式；禁止全局套用同一颗粒或笔刷。证据：[《青年男子肖像》](https://www.nationalgallery.org.uk/paintings/titian-portrait-of-a-young-man)、[Gardner 技法近观](https://www.gardnermuseum.org/blog/titians-technique-our-conservators-closer-look)。

### H4. 把叙事放在“无法回头”的一秒

【研究推断】在神话、历史或品牌叙事中，选择发现、离别、拒绝、追逐、承诺或后果已经启动的阈值，而非摆拍式人物集合；让动作与视线证明这一秒。证据：[poesie 委托研究](https://www.nationalgallery.org.uk/exhibitions/past/titian-love-desire-death/titian-s-poesie-the-commission)。

### H5. 系列靠反向与后果连接，不靠复制模板

【研究推断】成对/成组输出至少改变两项：身体正背、运动方向、视点高低、冷暖主导、景观开合或事件阶段；同时保留一个跨幅回声。证据：[Prado《维纳斯与阿多尼斯》](https://www.museodelprado.es/en/the-collection/art-work/venus-and-adonis/bc9c1e08-2dd7-44d5-b926-71cd3e5c3adb)。

### H6. 晚期感必须经过“建—改—开—收”

【研究推断】先建立可读形体，经过至少一次关系修订，再开放次要表面，最后用少量亮点、硬边或高色度收束；直接模糊、降清晰度或乱刷不能称为晚期 Titian。证据：[National Gallery 晚期技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/technical-bulletin-volume-36/titian-after-1540-technique-and-style-in-his-later-works)。

### H7. 同时通过三种观看距离

【研究推断】近看检查材质与层次，正常距离检查人物关系，缩略图检查主动作、明暗团块和焦点；若只有近看纹理或只有远看轮廓成立，选择性完成尚未闭环。证据：[Getty transcript](https://www.getty.edu/podcasts/art-and-ideas/lives-of-titian/)、[《阿克泰翁之死》目录](https://www.nationalgallery.org.uk/paintings/catalogues/penny-2008/the-death-of-actaeon)。

### H8. 归属不确定时降低名词强度，提高过程透明度

【研究推断】保留“Titian”“Titian or workshop”“Possibly by”“历史归于 Giorgione”等原始限定；借鉴时说明依据的是原作、变体还是综合原则，不以签名、pentimento 或单项材料证据越级定案。证据：[《音乐课》](https://www.nationalgallery.org.uk/paintings/possibly-by-titian-the-music-lesson)、[Louvre《田园音乐会》](https://collections.louvre.fr/en/ark:/53355/cl010062281)。

### H9. 先校正保存状态，再声明色彩意图

【研究推断】遇到异常暗蓝、棕黄雾层、断裂 glaze 或局部“未完”时，先查 smalt、清漆、磨损、裁切与旧补绘；无法验证时描述当前可见状态，不声称还原了 16 世纪原色。证据：[Recovering Titian](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/recovering-titian-the-cleaning-and-restoration-of-three-overlooked-canvas-paintings)、[《欧罗巴》守恒项目](https://www.gardnermuseum.org/experience/titian-restoration-2019)。

## 4. 表达 DNA

### 4.1 构图

- **主结构**：【研究推断】以斜向身体、相反运动、门洞/帷幕/树干形成的阈值和人物间空隙组织事件；景观不是背景填充，而是延长动作和后果。
- **肖像模式**：【研究推断】身份标志与“刚刚转身、即将说话或手正落下”的暂停动作并存；视线可与躯干不对称，避免正中证件照式静止。证据：[《青年男子肖像》](https://www.nationalgallery.org.uk/paintings/titian-portrait-of-a-young-man)。
- **神话模式**：【研究推断】把最重要关系放在身体接近、回避、暴露或追逐的临界位置；大场面仍需一个可在缩略图读出的主动作。
- **禁用捷径**：裸体 + 红布 + 古典柱式并不自动形成 Titian 构图。

### 4.2 形与线

- **底稿角色**：【研究推断】线是可修订的提案，不是不可侵犯的边界；先给姿态和比例，再让色层改变轮廓。
- **边缘谱系**：【研究推断】同一主体并置硬边、软边、失边和重新出现的亮边；焦点由边缘差异形成，不由全局锐化形成。
- **体积方式**：【研究推断】用暖冷、透明/不透明和邻色推进体积，少依赖均匀描边；手、脸和关键接触点比衣褶次部拥有更明确的结构。
- **区别项**：不是 Florentine disegno 的轮廓先决，也不是无结构的形体溶解。参照：[Met 的 Venetian color / Florentine design 综述](https://www.metmuseum.org/it/essays/venetian-color-and-florentine-design)。

### 4.3 色彩

- **结构色**：【研究推断】色彩承担前后空间、肉身温度、叙事危险和材料反光；高色度应局部化，并由中性、土色或暗部托住。
- **层次语法**：【研究推断】薄底/露底 → 局部不透明建形 → 透明 glaze 加深或增饱和 → scumble 提亮、降边或制造空气 → 少量高光收束；顺序可因作品变化，功能不可被扁平色卡替代。
- **肤色**：【研究推断】由暖基调、冷半影、局部红润、擦涂和背景邻色共同构成；避免单一桃粉、塑料高光和肤色统一预设。
- **织物色**：【研究推断】颜色与光泽方式绑定：红绸可有透明深红与含铅亮带，天鹅绒以较干短触吸光，薄纱靠露底与拖白。
- **保存警告**：【一手/官方】当前暗蓝或褐调可能受 smalt 失色和清漆影响，不建立“提香晚年只用棕黑”的规则。来源：[晚期技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/technical-bulletin-volume-36/titian-after-1540-technique-and-style-in-his-later-works)。

### 4.4 材料与表面

- **表面分区**：【研究推断】脸、手、首饰、武器、湿亮丝绸可局部闭合；阴影、景观、毛发和次要布面可更开放，但须保留方向和层次。
- **触法变量**：【研究推断】长/短、干/湿、薄/厚、拖/点、覆盖/露底必须与物质和光线相匹配。
- **时间可见性**：【研究推断】允许部分底层、修订痕迹或不完全覆盖使时间进入表面；禁止把裂纹、污渍、磨损和伪古化当作 Titian 的核心笔触。
- **数字转译**：用受控蒙版、局部透明度、材质响应、边缘层级和版本迭代模拟功能；不复制真实作品的随机损伤。

### 4.5 空间与光

- **色彩空间**：【研究推断】前后关系可由暖冷、透明度、饱和度和边缘清晰度共同建立；不是单靠线性透视或景深模糊。
- **光的任务**：【研究推断】光选择叙事锚点和材料差异：皮肤的柔亮、丝的断裂亮带、金属/珠宝的尖锐高光、暗织物的低反射应有不同响应。
- **阈值空间**：【研究推断】门、帘、树、开口与暗部可把人物置于“进入/暴露/逃离”的边界；空间本身参与叙事。
- **背景关系**：【研究推断】景观色和人物肤色应互相穿透或回应，避免人物像贴纸浮在独立背景上。

### 4.6 节奏与观看条件

- **节奏单位**：【研究推断】宽色带、短促触点、开放暗部和锐利亮点交替；密度围绕动作聚散，而非全画面平均复杂。
- **双距离**：【权威二手】近看读表面劳动，远看读人物与事件；两种读法必须同时成立。来源：[Getty transcript](https://www.getty.edu/podcasts/art-and-ideas/lives-of-titian/)。
- **系列节奏**：【研究推断】相邻画面通过身体朝向、色温、开合和事件阶段形成反拍；避免九宫格中机械复用同一人物姿势。
- **展示条件**：至少检查近距、正常距、缩略图和低对比屏幕；对大图局部开放度的判断不能只在 100% 放大状态完成。

## 5. 核心张力

### T1. 底稿秩序 ↔ 色层自由

【研究推断】Titian 既不是取消 drawing，也不是让 drawing 永远统治表面。底稿建立可行动的骨架，颜色和修订则有权推翻局部边界；后续 skill 应保留两端，不能选成“严谨线稿”或“无稿泼彩”的单边 caricature。证据：[1540 年前技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/titian-s-painting-technique-to-c-1540-1)。

### T2. 精确物性 ↔ 开放表面

【研究推断】丝、天鹅绒、皮肤和首饰需要精确区分，但这种精确可以只集中在决定性的局部；开放笔触不是物性缺失，而是通过密度和边缘对比让物性更突出。证据：[Gardner 技法近观](https://www.gardnermuseum.org/blog/titians-technique-our-conservators-closer-look)、[晚期技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/technical-bulletin-volume-36/titian-after-1540-technique-and-style-in-his-later-works)。

### T3. 近距材料 ↔ 远距事件

【研究推断】近看要容纳痕迹、层次和露底，远看又必须出现清楚的人物关系与叙事方向；任何只在一个距离成立的模仿都失去 Titian 晚期观看结构。

### T4. 个人发明 ↔ 工作室协作

【研究推断】Titian 可控制构思、关键修订和最终收束，同时让助手展开、复制或完成部分区域；不能用“工作室参与”抹去 invention，也不能用签名抹去协作。证据：[NGA Titian 学术条目](https://www.nga.gov/artists/1932-titian)、[English Heritage 守恒研究](https://www.english-heritage.org.uk/visit/places/apsley-house/history/significance/conservation-titian-painting/)。

### T5. 感官华美 ↔ 暴力与权力

【研究推断】poesie 的肤色、织物和景观具有高度感官吸引力，但叙事同时包含监视、强迫、追逐、惩罚和死亡；视觉转译应保持这种不舒适张力，不能把权力关系漂白成无后果的奢华浪漫。

## 6. Anti-patterns

1. **宝石色卡化**：只抽 ultramarine、朱红、金色和肤色，不建立底层、层次、透明度、擦涂与边缘关系。
2. **晚期模糊滤镜**：直接降清晰度、加噪点、加粗笔刷，跳过建形、修订和远距可读性。
3. **统一油画笔刷**：皮肤、丝、天鹅绒、树叶和天空共享同一触法与光泽。
4. **伪 pentimento 装饰**：为了“有过程感”随机露出双线、擦痕或错位，而这些痕迹不改变叙事关系。
5. **道具式神话**：用裸体、红布、猎犬和柱式拼贴代替不可逆的动作与权力结构。
6. **把开放表面等同未完成意图**：忽略实际未完、磨损、smalt 失色、旧清漆、裁切、补绘和工作室状态。
7. **单一天才手笔**：把签名、pentimento 或“高质量局部”当作完全亲笔的充分证据。
8. **机械系列化**：在多张图中复制姿势与构图，只替换颜色和道具。
9. **复古损伤包**：用裂纹、黄清漆、暗角和污渍冒充 16 世纪材料性。
10. **心理诊断肖像**：从姿态或表情推断 sitter 的疾病、人格或隐秘心理；只描述可见动作、身份编码和构图效果。

## 7. 文化、版权与可访问性边界

### 7.1 文化与伦理

- 【研究推断】涉及 Danaë、Europa、Actaeon 等题材时，应明确作品中的欲望、胁迫、裸露、窥视、惩罚和权力不对等；面向公共或未成年受众时选择非露骨裁切、替代题材或内容提示，不把性暴力包装为“宫廷浪漫”。
- 【研究推断】不把“Venetian”简化成东方颜料、奢华织物和异域消费的装饰标签；材料贸易、宫廷委托与帝国网络可以解释视觉条件，但不能替代作品分析。
- 【研究推断】不借可见表面做心理或医学诊断，不把晚年笔触解释为身体衰退、失明或精神状态，除非有直接且相关的可靠证据；本轮证据不足以支持此类因果。

### 7.2 版权与署名

- 原作多已进入公版不等于所有数字图像均可自由复用；博物馆摄影、高清下载、展览安装照和出版物页面可能有各自许可。实际使用前核对每个机构的 rights/terms，并保存作品名、年代、藏馆、归属限定与图像来源。
- 不直接复制一幅标志性 poesie 或肖像的完整构图用于商业主视觉；优先转译“色层构形、关系修订、材质异笔、双距离完成”等原则，并改变人物、场景、叙事和空间结构。
- 不把 “in the style of Titian” 当作唯一创作说明；输出应记录参考作品、参考层级和原创改变。涉及争议作品时保留 “Titian or workshop”“Possibly by Titian”“formerly attributed to Giorgione”等限定。

### 7.3 可访问性

- 颜色、冷暖和纹理不能独自承载状态或叙事信息；同时使用文字、图标、形状、位置或可读标签。
- 文本与关键控件必须维持可辨对比；不得为了模拟 glaze、暗清漆或开放暗部而降低正文、焦点状态和操作反馈的清晰度。
- 纹理、笔触和局部透明度不得穿过小字号正文或干扰字符轮廓；在高对比模式、低质量屏幕和色觉差异条件下复核。
- 若把成对画面转成动效，运动只用于视线、遮挡或前后关系的必要变化；提供减少动态版本，不用持续漂移、闪烁或放大模拟“活的笔触”。
- 对神话暴力、裸露和强迫内容提供语境说明与必要的内容提示；替代文本描述动作和关系，不以审美化形容词掩盖事件。

## 8. 最终 style SKILL 的拟议输出结构

以下只是后续 Phase 的结构提案，本轮不创建 `SKILL.md`。

1. **Frontmatter 与触发条件**：定义 Titian-style 视觉转译任务、适用媒介与非鉴定声明。
2. **核心姿态**：用一段话说明“过程优先于 palette”“晚期依赖修订与距离”“作者性是连续谱”。
3. **六个视觉心智模型**：每个模型保留定义、触发问题、操作步骤、限制和邻近风格区别。
4. **五段工作流**：发明关系 → 建立底层 → 色层构形 → 材质分化 → 双距离收束；系列任务额外加入跨幅反拍。
5. **六维表达 DNA**：构图、形/线、色彩、材料/表面、空间/光、节奏/观看条件，转成可检查参数。
6. **九条决策启发式**：作为生成前选择器与生成后审核表。
7. **媒介转译规则**：分别覆盖图像生成、插画/海报、编辑设计、品牌视觉和 UI；UI 只借结构色、层次与焦点，不牺牲信息清晰度。
8. **相邻风格辨别器**：对比 Giorgione、Tintoretto、Veronese、Florentine disegno、一般 Baroque/old-master 滤镜与 Impressionist brushwork。
9. **归属与证据协议**：保留亲笔/工作室/可能归属、历史归属、保存状态和来源链接；不输出真伪鉴定。
10. **Anti-patterns 与边界**：包含文化伦理、版权、可访问性及禁用捷径。
11. **响应格式**：先给视觉策略，再给构图/色层/材质/距离决策，最后给证据限定与自检；避免大段艺术史铺陈。
12. **参考索引**：优先链接 National Gallery 技术研究，再列其他主要博物馆、书信/原典与学术出版社。

## 9. 不确定性与证据边界

### 9.1 可以较高置信使用的结论

- 【一手/官方】Titian 使用底稿，同时在画中持续偏离和修订；“无 drawing 的纯 colorito”不成立。来源：[1540 年前技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/titian-s-painting-technique-to-c-1540-1)、[晚期技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/technical-bulletin-volume-36/titian-after-1540-technique-and-style-in-his-later-works)。
- 【一手/官方】薄层、glaze、scumble、湿碰湿、局部厚触和露底可以在同一职业阶段或同一作品中协同，colorito 不能还原为 palette。来源：[1540 年前技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/titian-s-painting-technique-to-c-1540-1)、[Gardner 技法近观](https://www.gardnermuseum.org/blog/titians-technique-our-conservators-closer-look)。
- 【一手/官方】晚期完成度可变，开放表面与高度控制的材质细节并存；晚期松动不是单向退化或一次性快速作画。来源：[晚期技法综述](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/technical-bulletin-volume-36/titian-after-1540-technique-and-style-in-his-later-works)、[《阿克泰翁之死》目录](https://www.nationalgallery.org.uk/paintings/catalogues/penny-2008/the-death-of-actaeon)。
- 【一手/官方】工作室参与、版本生产和后期修订形成作者性连续谱；签名、pentimenti、材料或质量均不能单独判定亲笔。来源：[《音乐课》](https://www.nationalgallery.org.uk/paintings/possibly-by-titian-the-music-lesson)、[《带鸟男孩》](https://www.nationalgallery.org.uk/paintings/titian-or-workshop-of-titian-a-boy-with-a-bird)、[English Heritage 守恒研究](https://www.english-heritage.org.uk/visit/places/apsley-house/history/significance/conservation-titian-painting/)。

### 9.2 必须保留限定的结论

- **书信不是完整美学宣言**：【一手/官方】现存书信主要围绕委托、付款、交付和关系维护；“视觉诗”与系列意识有直接证据，但不能替 Titian 编造系统理论。来源：[Epistolario 项目](https://www.tizianovecellio.it/portfolio/tiziano-lepistolario/?lang=en)。
- **Philip II 与 Titian 的主导程度未定**：【一手/官方】题材自由和共同项目两种解释应并列；不写成完全自由创作，也不写成完全被动执行。来源：[Prado《维纳斯与阿多尼斯》](https://www.museodelprado.es/en/the-collection/art-work/venus-and-adonis/bc9c1e08-2dd7-44d5-b926-71cd3e5c3adb)。
- **早期归属仍会变化**：【一手/官方】Giorgione 与早期 Titian 的边界长期争议；《田园音乐会》当前归 Titian，但历史归于 Giorgione，后续应用需保留历史层。来源：[Louvre catalogue](https://collections.louvre.fr/en/ark:/53355/cl010062281)、[National Gallery Giorgione 条目](https://www.nationalgallery.org.uk/artists/giorgione)。
- **晚期“未完成”不能统一解释**：【一手/官方】《阿克泰翁之死》等作品可能同时涉及长期修订、实际未完、磨损和后人处理；“有意 non finito”必须按个案说。来源：[《阿克泰翁之死》目录](https://www.nationalgallery.org.uk/paintings/catalogues/penny-2008/the-death-of-actaeon)。
- **手指施色证言需降级**：【权威二手】Palma il Giovane 的相关说法经后世转述；技术研究最多支持个别区域“可能”，不能把 finger painting 设为核心模型或必做效果。来源：[National Gallery catalogue cats 5–8](https://www.nationalgallery.org.uk/media/24100/vol36-cats5-8.pdf)、[Getty transcript](https://www.getty.edu/podcasts/art-and-ideas/lives-of-titian/)。
- **今天所见并非无损原貌**：【一手/官方】smalt 失色、清漆泛黄、glaze 丢失、磨损、裁切和旧补绘会改变色彩与完成感；数字复原也只能是有依据的估计。来源：[Recovering Titian](https://www.nationalgallery.org.uk/research/publications/technical-bulletin/recovering-titian-the-cleaning-and-restoration-of-three-overlooked-canvas-paintings)、[《欧罗巴》守恒项目](https://www.gardnermuseum.org/experience/titian-restoration-2019)。

### 9.3 未纳入心智模型的候选

- **“固定宝石 palette”**：跨时期不稳定，且无法解释层次、边缘与材料，未通过生成力和排他性验证。
- **“手指作画”**：证言间接、适用范围窄，只能作为个案可能性，未通过跨情境验证。
- **“晚年因身体衰退而画得松”**：本轮没有足够直接证据，且会造成医学化推断，排除。
- **“签名代表完全亲笔”**：被工作室、修订和守恒证据反驳，排除。
- **“画布天然导致粗放笔触”**：画布、运输和 Venetian 物质环境是条件，不是单因果风格定律，降为背景知识。

## 10. Phase 2 自检

- 命名视觉心智模型：6 个，位于要求的 3–7 个范围内。
- 每个模型：有一句定义、至少两个作品/媒介/时期证据情境、可迁移应用、相邻风格区别和限制。
- 决策启发式：9 条，位于要求的 5–10 条范围内。
- 表达 DNA：完整覆盖构图、形/线、色彩、材料/表面、空间/光、节奏/观看条件。
- 核心张力：5 组，不将矛盾强行调和。
- 明确保留：colorito 的底稿—层次—罩染—擦涂—边缘协同；晚期长期修订与双距离；亲笔/工作室连续谱。
- 反模式、文化伦理、版权、可访问性、SKILL 拟议结构和证据边界均已列出。
- 本文件无待填项，不创建或暗示已创建 `SKILL.md`。
