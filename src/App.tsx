import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import SomethingElse from "./components/SomethingElse/SomethingElse";
import TopNav from "./components/navigation/TopNav";
import SideNav from "./components/navigation/SideNav";
import { useRef, useState } from "react";

const App = () => {
  const mainAnchorRef = useRef<HTMLSpanElement>(null);

  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
  const [bottomDrawerVisible, setBottomDrawerVisible] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-indigo-500">
      {/* above bg-indigo-500 class is just to see what areas of the screen are streched 
          beyond other components and isn't necessary in final product */}
      <header className="h-[8vh] bg-red-100 p-2">Top</header>

      <div className="flex flex-1 overflow-hidden">
        <nav className="w-[15vw] bg-green-100 p-2">Side</nav>
        <main className="flex-1 space-x-2 overflow-auto bg-yellow-100 p-2 pb-20">
          <span ref={mainAnchorRef} className="block">
            Main
          </span>
          <button
            className="bg-slate-200 p-2"
            onClick={() => setSideDrawerVisible(true)}>
            Toggle side drawer
          </button>
          <button
            className="bg-slate-200 p-2"
            onClick={() => setBottomDrawerVisible(true)}>
            Toggle bottom drawer
          </button>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            mollitia maiores repellendus cum autem assumenda facilis delectus,
            laborum aperiam distinctio ducimus ipsum aspernatur quaerat fugiat
            non eum cumque. Nostrum libero quos, fugit molestias accusantium,
            quo totam quam rem aliquam illo repellat tempora reiciendis est
            ullam in at numquam excepturi sunt non velit cupiditate dolorem.
            Corporis id explicabo quae iste totam. Obcaecati, officiis
            necessitatibus praesentium assumenda consequatur unde, perferendis
            velit, esse vel nobis dolores architecto ipsam quisquam aperiam
            quaerat non amet mollitia voluptatem natus reiciendis maiores nulla
            odio expedita! Mollitia quisquam, ratione autem numquam neque iure
            vel soluta libero magni explicabo. Accusantium, ut dolore nisi error
            reprehenderit quam est facilis nam dolor asperiores sapiente
            deleniti qui perspiciatis, quos provident eum? A consectetur unde
            harum dolorum, corporis sit inventore similique, nemo reprehenderit
            dolor laborum, quod autem eius repudiandae maxime impedit ipsam quo
            soluta. Dolor reiciendis fuga doloribus temporibus veniam.
            Aspernatur ab iure corrupti expedita, aliquid inventore aperiam, eos
            consectetur possimus autem, sapiente deleniti voluptates recusandae?
            Nisi maiores consequuntur atque cum sint laudantium voluptatibus
            doloribus, assumenda nulla ab voluptates alias dicta nam unde
            distinctio hic reprehenderit repellendus magni adipisci molestias,
            cumque sit explicabo saepe. Voluptatibus quos praesentium placeat
            sint porro ad voluptate iure error, eligendi fuga reprehenderit
            magni quae laborum reiciendis at autem cum eaque repellat ex harum
            mollitia inventore ratione! Nesciunt, quia omnis incidunt explicabo
            similique optio alias eos voluptatem fugit quas magni ipsum, vitae
            nam maxime illum, amet unde porro. Velit modi dignissimos eos at
            itaque sapiente quae, quisquam provident officiis excepturi, maxime
            perferendis alias expedita omnis corporis laboriosam fugiat
            similique ipsam molestiae quam laudantium sed sequi harum molestias.
            Odit fuga voluptate sit ut ipsa reiciendis qui, at, voluptas ea,
            aliquid deleniti neque. Eveniet tenetur deleniti placeat cum,
            consequatur quia vitae repellendus labore animi, velit consequuntur,
            praesentium repudiandae ducimus. Voluptatum doloremque eos quaerat
            ipsam animi ullam aspernatur distinctio deleniti. Ut amet est illum
            architecto hic eveniet suscipit aut saepe impedit voluptates sed
            ratione sunt aspernatur, placeat error numquam pariatur possimus
            quae et quos. Soluta ut veniam voluptas quia voluptate culpa dolores
            atque corrupti enim eos ex molestias provident, id repudiandae
            libero sunt deserunt recusandae facere nemo obcaecati ea est.
            Veniam, voluptate accusamus quasi sapiente omnis placeat labore quod
            facere delectus molestias itaque animi neque nihil quos. Ducimus id
            mollitia inventore debitis nisi itaque reiciendis quod tempora aut,
            voluptate error quis repellat nam rerum modi fuga nostrum aspernatur
            voluptatibus similique, eligendi corporis magnam ab. Doloremque
            eligendi labore voluptatum fugit, nisi laudantium porro rerum qui!
            Maiores quam enim deleniti, rem est nihil ipsam repellendus dolore
            laudantium unde doloribus dicta eum sunt numquam quae optio
            dignissimos harum soluta labore esse nesciunt! Itaque eum cumque,
            soluta architecto eveniet maxime velit ipsum dolorem amet molestiae
            beatae tempora, dolor accusantium quos iste nisi assumenda, eius
            asperiores quam repudiandae. Maxime unde tempora nihil accusamus
            pariatur quidem inventore distinctio! Magni temporibus neque
            blanditiis perferendis ab, alias accusamus doloribus fuga velit
            veritatis repellat molestiae earum tempore dignissimos aut quasi eos
            laborum consectetur esse nesciunt dolorem cum culpa modi numquam?
            Alias, nesciunt tempore impedit unde maiores quos commodi
            consectetur natus dolores architecto beatae ipsa ratione odio
            corrupti placeat voluptate. Laudantium expedita laboriosam
            repudiandae alias nam accusantium hic, quisquam omnis quis harum
            voluptatem illo enim. Laboriosam harum nobis cumque quia possimus
            adipisci ea ad officia quod hic maxime doloribus ut, delectus sequi
            amet minima! Debitis quae accusamus dolorum quas iure, alias aperiam
            illum aspernatur esse eligendi dolore amet nisi rerum sint, numquam
            necessitatibus dolor commodi distinctio dolores? Nostrum hic
            asperiores accusamus, mollitia in eveniet voluptatum quae cum
            reiciendis numquam suscipit! Rerum iusto vel repudiandae dolorem,
            sint dignissimos vero saepe incidunt dolores architecto, optio
            dolore eos in voluptates magnam accusantium aspernatur deleniti
            laboriosam consequuntur? Cumque dolorum accusantium laboriosam
            blanditiis ullam odit est nostrum aperiam vel dolore, officiis
            magnam hic mollitia deserunt. Impedit laborum nesciunt recusandae
            dolorum et natus architecto nobis consectetur ipsam consequatur ipsa
            atque, sint temporibus magni nam repellendus possimus, perferendis
            rerum molestias quos asperiores commodi. Similique ipsum, nostrum
            maxime expedita recusandae quam nobis omnis aspernatur est
            distinctio exercitationem rem illo, sunt dolor labore mollitia
            veritatis molestias dignissimos in nesciunt cupiditate aut quos cum?
            Officiis, excepturi praesentium placeat assumenda nostrum quae
            veritatis eligendi corrupti quod voluptatem qui vel quidem impedit
            perferendis porro ea, nulla unde error. Quas distinctio eligendi,
            hic tenetur expedita ut aliquid voluptatum cupiditate quam amet quis
            consequuntur debitis libero tempore facere reprehenderit reiciendis
            sequi ex recusandae, adipisci non nobis velit numquam! Tempore
            exercitationem ducimus eveniet, alias neque, fuga quidem nam odit
            culpa ad, deleniti quo libero nemo mollitia voluptatibus laudantium
            sapiente! Doloribus saepe magni aliquam excepturi officia
            asperiores, quae consequuntur sequi nisi beatae labore. Commodi amet
            vero veritatis aspernatur nostrum quaerat necessitatibus maxime,
            nisi, quos voluptas ipsa accusamus. Facilis neque quam fugiat
            suscipit voluptatibus officia deleniti illo cum qui, ipsam nam
            debitis aliquam officiis voluptatem ipsum fuga. Quos, doloribus
            tempore odit, perferendis sapiente adipisci aliquam placeat
            recusandae assumenda fugiat facilis dolore aperiam aut magni laborum
            officiis libero corporis rem sint soluta laboriosam praesentium
            eveniet fuga tempora. Earum aliquid veniam fugit dolores atque quae
            quam eveniet assumenda voluptatum ratione dicta, culpa nulla!
            Tempora magni assumenda ipsa doloremque cupiditate a, modi itaque
            rem odit illum veritatis. Nisi accusamus aut eveniet consequuntur
            labore modi quo qui dolores perferendis impedit. Aspernatur mollitia
            quae tempore nostrum, dolor esse in provident velit rem suscipit
            ducimus minima laudantium deleniti! Incidunt nostrum non vel, ut
            ullam dolor sit adipisci a quis maiores accusamus amet temporibus
            quasi quia sapiente natus ea beatae id. Autem, placeat eligendi
            dolorum reiciendis porro sed molestias suscipit vitae ut recusandae
            eum illum perspiciatis odio necessitatibus enim, fugit deserunt
            voluptas fuga commodi? Dicta fugit ad doloribus tempore adipisci
            nulla, similique exercitationem maiores nesciunt ratione velit,
            minima qui eos totam? Recusandae atque quidem maxime possimus culpa
            accusamus, qui ducimus suscipit, corrupti iure quae quaerat pariatur
            est soluta. Ducimus sequi placeat laudantium, illum earum
            consequatur optio neque eum rerum. Aliquam, saepe. Est officiis rem
            earum sequi quis ducimus delectus doloribus, amet architecto, eaque
            iusto nam culpa aliquam quas, eligendi perferendis minima?
            Repellendus similique dolorem blanditiis culpa quibusdam vel placeat
            iure et! Eligendi eaque ducimus maxime, necessitatibus nostrum
            ratione suscipit sequi aspernatur fuga, eum soluta et esse labore
            nemo fugiat enim totam. Amet suscipit eos doloribus in corrupti
            molestias est officiis magnam ipsum obcaecati. Aliquam minima nisi
            voluptatum quis eos illum dolorum esse? Eaque, quod velit ex odio
            veritatis ducimus aspernatur at voluptate iure, fugit, doloribus
            temporibus. Rerum velit, veritatis inventore consequuntur
            accusantium praesentium molestiae voluptates doloremque ratione fuga
            ducimus libero ullam perferendis! Maxime, earum. Nihil fugiat
            corrupti nesciunt consectetur, voluptatem ad hic ipsum placeat
            dolorem magnam quidem sint obcaecati accusamus nulla inventore enim
            facere quos dolores ducimus cupiditate tempora! Voluptates minima
            recusandae pariatur fugiat impedit quis architecto optio, soluta
            provident vel nisi consectetur quaerat, laborum obcaecati. Quae
            ipsum autem ut ratione non libero pariatur labore sequi minima?
            Earum iusto numquam eaque eveniet consequuntur ipsam laudantium
            voluptates praesentium ducimus cum nostrum quisquam, veritatis,
            molestiae dicta voluptas quod consectetur atque quia in et quos
            voluptatum. Nulla quam illo facilis pariatur quisquam, ipsa, nam
            eius assumenda id vitae nihil corporis esse ratione dolores.
            Provident recusandae incidunt architecto tenetur, porro iste commodi
            atque labore itaque autem explicabo, cum optio necessitatibus odit
            neque, qui quis! Quisquam quo beatae porro corporis impedit omnis
            quod deserunt cumque? Atque nihil necessitatibus repellendus
            recusandae nisi ipsa fugiat, asperiores expedita molestiae harum
            deleniti nemo numquam dolores quod soluta mollitia nulla! Maiores
            magnam neque recusandae vero in molestias sunt ea architecto
            adipisci ipsam necessitatibus pariatur, dicta, non possimus
            inventore voluptas itaque fugiat fuga. Nobis, pariatur nesciunt!
            Exercitationem voluptatum repudiandae maxime, aperiam distinctio
            inventore asperiores, dicta ut, modi odit quasi? Voluptates
            molestias commodi vel mollitia numquam enim voluptatem tempore
            similique debitis sint et quod dolorum maxime facere asperiores,
            soluta nobis eius, doloribus, libero impedit sit nemo quam rem
            aperiam! Ad ullam rerum, reiciendis, molestiae voluptatem
            necessitatibus itaque quisquam eaque magni incidunt provident
            dolorum libero repellat odio dignissimos iure cum autem eligendi
            harum minus, consequuntur aliquam facere quae nostrum. Veniam
            excepturi nulla natus, magnam, impedit corrupti repellendus officia
            fugiat architecto, possimus veritatis. Neque ex, cupiditate atque
            alias eveniet beatae possimus vel, exercitationem placeat vitae
            earum accusantium obcaecati dolor. Vitae, modi dolores nam
            repellendus unde officia sunt placeat animi corrupti delectus ut
            accusamus molestiae ipsum praesentium quae voluptatum vel
            reprehenderit dolor, atque ex et iure quo voluptatibus. Dicta sint
            autem dolores eveniet nemo suscipit doloremque voluptatum, quisquam
            architecto laboriosam maxime qui dignissimos dolorem porro magni
            sed. At, ipsam expedita, molestias alias nihil nobis quibusdam
            repellendus qui quaerat sit totam voluptates dicta corrupti illo
            tempore inventore obcaecati dolore ab iusto labore dolor asperiores
            possimus mollitia. Eligendi minima reprehenderit, explicabo autem
            dolore voluptatem magnam tempora deserunt quisquam provident facere.
            Dolor maiores, sint facere sit, neque tempora voluptatibus aliquid
            quasi minima assumenda, illo voluptate omnis corporis. Voluptatem
            mollitia explicabo, dolores blanditiis laboriosam iste laborum est
            ad dignissimos rem, illo quidem, cupiditate alias. Eum eius, quaerat
            dignissimos earum ut provident recusandae et nisi voluptatem ea esse
            reprehenderit doloremque voluptatibus neque veniam hic adipisci
            voluptate labore dolore iste nihil. Necessitatibus distinctio velit
            unde quidem, recusandae aliquid, eius placeat impedit nemo numquam
            sunt? Modi eum, commodi doloremque assumenda architecto culpa.
            Veniam mollitia possimus illum exercitationem, iure, facilis impedit
            deleniti similique, laudantium consequatur accusantium
            necessitatibus delectus reiciendis. Repudiandae fugit voluptate
            nihil atque ab amet quibusdam earum quis harum, exercitationem
            suscipit laboriosam quae eveniet expedita quod quaerat vitae eum
            magnam assumenda autem sit excepturi? Esse eligendi cum illum
            tempora suscipit iste molestias animi impedit, deserunt illo
            consectetur sapiente ut ex voluptatem maxime itaque ad dignissimos
            quasi. Laborum at fugiat eos cumque optio. Voluptatem officia quasi
            odit et? Temporibus eaque debitis adipisci, maxime exercitationem
            velit ad corporis voluptatem harum corrupti in ab beatae nulla, iure
            architecto commodi laboriosam saepe dolor, enim voluptatum nostrum
            distinctio incidunt voluptate. Neque temporibus praesentium, facilis
            in illum deleniti ea sed minus libero harum. Sit at qui ratione
            tenetur autem numquam temporibus beatae. Minus sunt itaque nesciunt
            veritatis, aspernatur quam quis error similique quas ex dignissimos
            recusandae dicta, amet perferendis rerum culpa, esse eligendi
            officiis! Perspiciatis consequatur hic excepturi ipsam, impedit
            voluptatem sed laudantium sapiente deserunt asperiores dolorem
            inventore exercitationem in quae ad expedita aliquid nam fugit magni
            placeat commodi. Optio porro iusto a autem! Molestiae nisi,
            quibusdam distinctio voluptates, aliquam officia voluptatem rerum
            delectus at sint perspiciatis esse magni perferendis. Fuga quam,
            doloremque accusantium eum quidem dolore sequi pariatur facere
            dolorem harum ducimus consequatur odio officia unde reprehenderit
            illum quia. Nesciunt quidem iusto excepturi eius fuga quaerat fugit
            illum dolor magni quo accusantium animi distinctio, itaque
            reprehenderit quos vel. Quibusdam fuga dolores officia laborum
            delectus deserunt necessitatibus quas amet eaque ea, tenetur ipsum
            nostrum! Voluptate beatae impedit consequatur laborum rerum libero,
            dignissimos quo dolorum laboriosam dolor est, quisquam eligendi
            quaerat, adipisci voluptas distinctio reprehenderit! Ea officia
            suscipit itaque eveniet voluptatibus corporis quam minus, molestiae
            placeat dolor ducimus vero, repudiandae sint quos ut. Est ratione
            deserunt architecto perspiciatis voluptatibus ipsam deleniti
            nesciunt ea libero quae voluptatem rem autem sunt minus, adipisci
            quibusdam dolore. Saepe harum in illum similique, distinctio libero
            at perspiciatis deserunt dolore qui necessitatibus aliquam. Quasi
            voluptate, ipsam quis tenetur cupiditate harum quam autem pariatur
            aliquid cumque accusantium minima asperiores quisquam corporis
            dignissimos. Non tenetur, beatae impedit tempora ipsam incidunt ab,
            provident, similique natus repellat nulla voluptas voluptatem fugit
            odit! Architecto quam placeat facere expedita in esse qui excepturi
            voluptates culpa laborum vero dolor, at quibusdam aliquam dicta,
            sunt iusto. Iure placeat dolorum autem tenetur itaque, cupiditate
            natus eos libero, a incidunt eligendi provident delectus officiis,
            ad omnis dicta deleniti. In, odit aliquam, facere quod ducimus
            harum, laborum iure fugiat dignissimos assumenda similique. Quod
            labore laborum in esse cupiditate molestias aliquid, fugit magni
            numquam nam cum blanditiis laboriosam, incidunt tempore beatae?
            Nihil nobis dolorum perspiciatis reprehenderit minima iure placeat
            sapiente vero ad voluptates harum libero explicabo doloribus dolores
            accusamus et earum, eligendi ipsa qui. Dicta atque eum molestiae
            iure expedita! Saepe quidem tenetur, dignissimos recusandae porro
            quisquam maxime sunt nam fugit sit iusto magnam soluta delectus? Ab,
            dolor quos quia, aliquid esse delectus enim quidem natus adipisci
            odio amet consectetur, ipsum qui consequuntur!
          </div>
          <div className="flex justify-center">
            <button
              className="h-24 w-24 rounded-full bg-slate-200 p-2"
              onClick={() =>
                mainAnchorRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              Back to top
            </button>
          </div>
        </main>
      </div>

      <div className="h-[6vh] bg-gray-200 p-1">footer</div>

      <div
        className={`fixed top-0 bottom-0 left-0 z-[999] w-1/3 rounded-r-lg bg-red-300 p-2 transition duration-300 ease-in-out ${
          sideDrawerVisible ? "" : "-translate-x-full"
        }`}>
        <div className="flex items-center justify-between">
          <h4>Side Drawer</h4>
          <button
            className="text-2xl"
            onClick={() => setSideDrawerVisible(false)}>
            X
          </button>
        </div>
      </div>

      <div
        className={`fixed bottom-0 left-0 right-0 z-[999] h-1/3 rounded-t-lg bg-red-300 p-2 transition duration-300 ease-in-out ${
          bottomDrawerVisible ? "" : "translate-y-full"
        }`}>
        <div className="flex items-center justify-between">
          <h4>Bottom Drawer</h4>
          <button
            className="text-2xl"
            onClick={() => setBottomDrawerVisible(false)}>
            X
          </button>
        </div>
      </div>

      <div
        className={`backdrop fixed top-0 left-0 right-0 bottom-0 z-[900] select-none bg-white/50 backdrop-invert backdrop-opacity-30 ${
          sideDrawerVisible || bottomDrawerVisible ? "visible" : "hidden"
        }`}></div>
    </div>
  );
  /*
  return (
    <div className="App">
      <Router>
        <TopNav />
        <div className="flex">
          <SideNav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/something" element={<SomethingElse />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
  */
};

export default App;
