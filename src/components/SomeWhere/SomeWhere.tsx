import { nanoid } from "nanoid";
import { BsDownload, BsPlusLg, BsTrash, BsUpload } from "react-icons/bs";
import { Toast } from "../../Types";

interface SomethingElseProps {
  setSideDrawerVisible: (state: boolean) => void;
  setBottomDrawerVisible: (state: boolean) => void;
  addToast: (toast: Toast) => void;
  setModalVisible: (state: boolean) => void;
}

const SomethingElse = ({
  setSideDrawerVisible,
  setBottomDrawerVisible,
  addToast,
  setModalVisible,
}: SomethingElseProps) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="toolbar w-full space-x-2 bg-gray-300 p-2">
        <button
          className="rounded bg-sky-200 p-2"
          onClick={() =>
            addToast({
              id: nanoid(),
              message: "it worked!",
              visible: false,
            })
          }>
          <BsPlusLg />
        </button>
        <button
          className="rounded bg-red-200 p-2"
          onClick={() => setModalVisible(true)}>
          <BsTrash />
        </button>
        <button
          className="rounded bg-sky-100 p-2"
          onClick={() => setSideDrawerVisible(true)}>
          <BsDownload />
        </button>
        <button
          className="rounded bg-sky-300 p-2"
          onClick={() => setBottomDrawerVisible(true)}>
          <BsUpload />
        </button>
      </div>
      <div className="flex-1 overflow-auto p-2 pb-20">
        <h4 className="pb-4">Some where</h4>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        molestias est consequatur ullam, soluta dolorum officiis pariatur
        voluptas autem adipisci voluptate molestiae quae iure minus
        necessitatibus sit ut natus in perferendis maxime officia facilis et?
        Error maxime, blanditiis cupiditate officia rem voluptate, minus natus
        eveniet similique, distinctio laudantium doloribus aut quaerat. Quam
        eligendi quibusdam ullam sequi iusto pariatur quas ratione commodi, in
        magni qui iure labore ad tenetur, aperiam minus voluptatibus neque ut,
        tempore laborum. Impedit velit vel, quos obcaecati veritatis accusamus
        consequuntur exercitationem, iste quaerat, sit debitis quod. Sapiente
        architecto, eveniet labore, eligendi culpa maiores debitis accusamus cum
        iure exercitationem dolorum quisquam sint soluta similique et, animi
        temporibus consequatur! Nisi iusto provident placeat explicabo nam
        quaerat! Inventore hic doloribus eius quos delectus, ipsam sit.
        Voluptatum odit laudantium ullam! Cum illum accusantium assumenda quae
        fugit deserunt provident debitis et. Illum quae magnam, accusantium odit
        architecto, inventore adipisci eaque mollitia amet iure suscipit
        distinctio. Error nam odio quibusdam? Numquam neque illum aperiam,
        maxime exercitationem quaerat id expedita atque voluptatum. Odit
        dignissimos ab alias voluptas aspernatur eum itaque illum nesciunt
        magni, veniam suscipit quas enim officiis dolorem rem necessitatibus.
        Impedit earum ea aliquam nesciunt perspiciatis! Esse autem non possimus
        similique explicabo, nisi accusantium reprehenderit accusamus nobis quod
        doloremque saepe, aperiam nemo facilis id repellendus, corporis illo
        laudantium harum deleniti. Quibusdam, veritatis expedita repudiandae
        eius officiis quos. Consequatur, rem voluptas. Nesciunt itaque omnis ut
        nisi eaque voluptatum nam ullam quis, veniam, id iusto laboriosam
        debitis ipsam praesentium nihil saepe? Impedit possimus cupiditate
        magnam sunt nihil, aspernatur iste iusto, hic aut quae aliquid
        voluptatum alias harum minus vero, tempore pariatur. Ipsum natus iusto
        voluptatem consequuntur iure obcaecati quaerat illum, recusandae dicta
        voluptas vitae nam aspernatur nesciunt tempora amet odit ut provident
        quo optio cupiditate rerum placeat, libero impedit. Commodi sunt, eos
        illo cumque veritatis iste vel sed nisi asperiores ipsa explicabo eaque
        soluta eveniet libero consequuntur veniam blanditiis quod similique
        necessitatibus error. Iste beatae veritatis aut sint rerum perspiciatis
        sapiente praesentium accusamus neque, quo quia necessitatibus voluptas
        modi corrupti rem assumenda ullam eaque error aspernatur nulla nostrum,
        voluptates numquam deserunt? Aliquid rem accusantium aspernatur
        provident quidem quam similique quisquam repellendus consequuntur fuga
        asperiores nobis necessitatibus aperiam, deserunt in nulla nihil ducimus
        maiores doloremque itaque eveniet. Voluptate, mollitia cupiditate nobis
        voluptatum, voluptatem, quod accusamus dolores sed facilis cum commodi
        eveniet illo et ab maxime. Sed iure delectus perferendis tenetur cum
        adipisci magnam dicta amet voluptates, provident neque facilis, fuga
        sapiente vero accusamus quis? Harum similique fugiat natus in. Ab sunt
        modi error ea fugit nam delectus ut necessitatibus sequi voluptates
        assumenda, unde cumque consequuntur voluptatem aliquam deserunt
        doloribus quam aperiam voluptas esse, eos, tempora magni. Beatae
        consequatur aut itaque quisquam. Facilis alias officia voluptate
        repellat omnis maiores, earum est consequuntur excepturi nihil illo odit
        tempore doloremque tenetur neque quam amet asperiores ipsum atque, non
        dolor magni ullam eius aliquam. Quae voluptatibus quidem nam, maiores
        nobis reiciendis aliquid animi ea neque eos quia nesciunt placeat hic
        atque accusantium qui dolorem quasi sapiente? Similique unde odio
        doloremque, aspernatur exercitationem iure accusantium magni dolorem
        ducimus laboriosam veniam debitis ea libero, deserunt repellendus
        numquam rem fugit dicta hic sit excepturi eos delectus tempora?
        Laudantium enim, eveniet similique labore nam, expedita magnam ut
        distinctio libero tempora laboriosam voluptatem aperiam veniam
        provident, consequuntur molestias veritatis? In, quos? Laboriosam, a
        officiis, quam aliquid dolore veritatis eum, sunt at esse accusamus rem
        ratione corrupti incidunt iusto? Nemo pariatur sunt eligendi porro
        numquam? Rerum incidunt aut laborum, tenetur molestias cupiditate nulla,
        consequuntur sint nihil corrupti harum error doloribus, magnam possimus.
        Possimus veniam facilis quidem, ducimus optio unde fugit rerum itaque
        iusto voluptatibus debitis quas nostrum eum obcaecati facere expedita
        ab! Dolorum magni sunt laborum hic consequuntur pariatur asperiores,
        dignissimos, ex quibusdam quae vel qui delectus et porro explicabo enim
        neque deserunt blanditiis quisquam ea? Ut tempora vero dolor sunt
        laboriosam exercitationem porro deserunt illo repellendus libero.
        Consequuntur, veniam eaque nihil consectetur natus sit ipsam repellendus
        nulla? Deserunt enim, esse cum quas ratione nulla repellendus, veniam
        ullam temporibus illum impedit fugiat placeat. Deserunt natus tempore
        voluptas perspiciatis expedita, consectetur at, placeat sint provident
        neque repellat adipisci debitis, maxime ratione pariatur odit facilis
        fuga! Libero error, veniam assumenda magni vitae perspiciatis quas
        voluptas commodi qui! Illum voluptatibus necessitatibus blanditiis ipsum
        nostrum atque sit delectus odio totam, minima, aliquam omnis suscipit
        esse quae quas id vero repellat debitis molestias quidem obcaecati iusto
        aperiam quo. Totam nisi mollitia distinctio accusamus dolorum, nobis eum
        vitae aspernatur, laborum quasi consequatur voluptatum incidunt! Modi,
        similique asperiores eveniet incidunt molestias maxime, maiores sequi
        vel suscipit alias mollitia deleniti dolores, rerum animi itaque facere
        illum voluptate blanditiis odit rem. Magni minus libero magnam
        architecto explicabo consectetur inventore iste impedit! Vitae, dolorem
        ad beatae corrupti aperiam modi rerum libero eaque quisquam impedit
        explicabo perspiciatis reiciendis ipsum eos enim nesciunt totam quo
        natus. Aliquam laborum fugiat sapiente qui porro explicabo mollitia,
        distinctio doloribus iure deleniti fugit, ipsam assumenda! Eius nulla
        reiciendis numquam dolore quibusdam ab repellendus dicta. Assumenda
        minus provident odio fuga, error, id sint, quaerat deleniti impedit
        commodi ab debitis soluta magnam quia harum qui asperiores. Earum enim
        reprehenderit eaque ratione illum, aliquid quam quibusdam, alias nostrum
        ducimus quisquam tempore, amet quod. Maiores deserunt ipsam possimus
        reprehenderit libero asperiores assumenda, quis, quaerat eveniet laborum
        culpa necessitatibus exercitationem, fuga quas? Id provident neque,
        cumque cupiditate quia natus repellendus quisquam maxime unde hic
        adipisci exercitationem fugiat molestiae cum aut. Inventore ullam facere
        libero dolorem laborum! Doloribus corporis impedit ex cumque, odio quas
        quae, quidem a eligendi necessitatibus vitae! Consequuntur perferendis,
        quis earum repellendus molestiae recusandae tenetur sit reprehenderit
        nihil, rem dolores fugit sequi voluptates autem totam id. Voluptas qui
        commodi nihil non dolorum laborum, laboriosam officia adipisci,
        asperiores, eum tenetur optio quod rerum deserunt! Earum pariatur,
        sapiente facere, esse quaerat adipisci aperiam repellendus reprehenderit
        dolorum rerum minus eius in maxime totam veniam! Inventore, similique
        nostrum harum repellat quia, nam fuga quidem aspernatur in adipisci
        impedit optio! Itaque, eos libero impedit voluptatum similique possimus.
        Nesciunt deserunt aperiam illum officiis rerum unde error neque minus
        voluptate! Blanditiis, cum saepe! Tenetur quibusdam debitis deserunt a
        qui, tempore autem nemo iusto reiciendis quos mollitia molestiae
        dignissimos incidunt repellendus. Nostrum repellendus hic inventore?
        Beatae obcaecati earum aspernatur nam incidunt voluptate fuga?
        Distinctio laudantium nesciunt nostrum, natus qui ducimus cupiditate
        necessitatibus doloremque animi iste voluptas laboriosam ad, illum odio
        deleniti repellendus at! Et odit illo harum dolorem nesciunt cumque
        dolore maiores rerum, earum ducimus minima est deserunt suscipit
        possimus reprehenderit deleniti natus quod? Deleniti nemo earum numquam
        totam error, ratione quae iste, nihil, quis placeat soluta possimus
        optio esse voluptate. Excepturi alias amet sed perspiciatis vero. Soluta
        ad nostrum quasi? Est sint molestiae iste enim beatae facilis culpa fuga
        earum veniam sit accusamus explicabo veritatis cupiditate pariatur
        aperiam eius, unde sapiente. Illo, dolores deserunt at culpa saepe
        provident praesentium, nemo molestiae, possimus maxime est molestias
        soluta pariatur doloremque! Dolorem quod voluptatem dolorum aliquid
        debitis! Amet impedit, ab illo pariatur dolor quia voluptatibus vero
        hic, aliquid itaque doloremque assumenda! Ea porro incidunt a
        perspiciatis perferendis earum alias ullam beatae animi corrupti
        quisquam neque tenetur nostrum fuga facere amet optio quas accusamus,
        omnis sint fugiat officia eligendi laborum repellat! Ex laboriosam porro
        sunt, possimus fugiat natus, sed reiciendis sapiente accusantium
        repellendus est exercitationem id iste vitae nam aliquam ipsum eos! Ipsa
        laborum sed debitis quidem assumenda est rerum dolorem ipsum iusto optio
        enim voluptatibus, eius explicabo quo maiores, officia minus blanditiis
        et. Consequatur similique incidunt atque commodi sint cumque enim
        ducimus illo labore id quam consectetur sequi repudiandae explicabo
        praesentium ullam architecto, libero quo possimus, esse eaque, officiis
        nam aliquid cupiditate. Sunt accusantium rerum quisquam eum hic
        exercitationem ipsam maiores recusandae modi odio provident tenetur
        ipsum, fugiat expedita error vitae, facilis officiis beatae assumenda
        dolore molestiae, excepturi nulla. Maxime aspernatur, sunt repellat
        voluptate aliquid soluta reprehenderit eaque odit! Fuga, dicta voluptate
        cumque voluptatem repellat repellendus? Hic, repellat! Tempore, dolores.
        Nulla architecto enim harum tempora repudiandae pariatur ducimus esse
        reprehenderit dicta similique accusamus, quos in cumque, veritatis atque
        beatae quis quae ipsam quibusdam explicabo. Culpa iste non repudiandae
        vitae voluptates saepe et quod error deserunt sit ea, perferendis
        delectus eius ipsam ex vero sunt unde dolorem consequuntur. Voluptatum
        ab dolores accusantium rem aperiam asperiores quam voluptatem, possimus
        mollitia commodi odit eveniet dignissimos ut eos, amet consequatur nulla
        ea cupiditate culpa debitis repudiandae animi! Ipsum veniam id similique
        dicta voluptates iusto cum! Facilis, dolore accusamus. Quod provident
        similique cum nostrum libero adipisci eveniet esse molestias quasi,
        assumenda odit, repudiandae ea laudantium maxime dolorum! Facilis iure
        quaerat iste culpa ab quae necessitatibus consequatur voluptatum magnam
        alias quos blanditiis, a possimus ad perferendis reiciendis quis autem
        nostrum vel nihil delectus. Commodi sint hic ex exercitationem eius
        necessitatibus rem enim aliquid maxime nulla, eum provident aliquam
        natus recusandae? Quisquam rerum mollitia vitae repudiandae nostrum
        voluptas at suscipit fuga voluptatem cupiditate nesciunt sit libero,
        doloremque dolorum quos exercitationem aliquid iusto aspernatur ipsam
        quo corporis aliquam. Consequatur a, voluptatem dolorum explicabo,
        dolore rem nisi quis ducimus cum officiis maiores. Amet saepe rem maxime
        odio non unde perspiciatis officiis totam sunt minima!
      </div>
    </div>
  );
};

export default SomethingElse;
