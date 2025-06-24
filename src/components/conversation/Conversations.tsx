import { useState } from "react"

const Conversation = () => {
  const [activeTab, setActiveTab] = useState('summary')

  return (
    <div className="min-h-[90vh] w-[80vw] bg-black border-[20px] border-white/80 rounded-md">
      <div className="heading p-[2px] bg-gradient-to-r from-[#B70849] to-[#662DFF]">
        <div className="flex p-5 gap-10 bg-black text-white items-center justify-between">
          <div className="bothHeading flex gap-10">
          <div
            className={`font-bold text-2xl cursor-pointer transition-colors duration-200 ${activeTab === 'summary'
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
              }`}
            onClick={() => setActiveTab('summary')}
          >
            Conversation Summary
          </div>
          <div
            className={`font-bold text-2xl cursor-pointer transition-colors duration-200 ${activeTab === 'conversation'
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
              }`}
            onClick={() => setActiveTab('conversation')}
          >
            Complete Conversation
          </div>
          </div>
        <div className="hover:cursor-pointer"><img src="/images/conversation/close.svg" alt="" /></div>
        </div>
      </div>

      <div className="h-[70vh] mt-5 mb-5">
        {activeTab === 'summary' && (
          <div className="summary custom-scroll text-left p-5 text-white h-full overflow-auto">
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iure commodi deleniti veritatis cupiditate voluptatum ducimus natus laudantium placeat, at blanditiis saepe culpa quas ratione consequatur illo esse reprehenderit. Perferendis, consequuntur nam dolores sequi ratione excepturi culpa quidem repellat. Corrupti reprehenderit fugiat autem exercitationem at iusto perspiciatis quibusdam laborum quam. Quod, debitis eos. Ea iusto quod voluptatem alias laboriosam? Optio est tempora sint nobis adipisci eius ullam sed quos placeat nulla, aliquam omnis? Quia doloribus culpa quos officia voluptate quam, asperiores error adipisci? Accusantium, id. Error ducimus quaerat velit quia sint laborum animi dignissimos, adipisci ratione nesciunt veniam dicta laudantium eos blanditiis dolor odit laboriosam dolorum doloribus obcaecati! Nam ullam quis molestias quas! Beatae quasi sed tempore omnis alias deserunt temporibus quis officiis cupiditate delectus eligendi, et unde, tempora inventore aspernatur! Quasi esse qui reprehenderit omnis vero et assumenda blanditiis, ratione fugit in laudantium explicabo maxime similique pariatur commodi aperiam cumque eum autem! Inventore earum magni nostrum repudiandae ducimus quas excepturi eum architecto, praesentium quidem accusantium assumenda? Ullam illo ex debitis sapiente fugit. Sequi nam minima magni numquam corrupti perspiciatis unde ipsum nostrum debitis porro nihil maiores molestias voluptas rerum adipisci, ipsam, possimus cum atque mollitia ex! Illum, officia distinctio
            </p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos qui ab accusantium, illum maiores labore ut ullam officiis saepe doloribus rem, eligendi numquam, necessitatibus asperiores eum! Qui molestiae nihil eos nobis praesentium maiores, incidunt provident voluptates quod, consequatur soluta excepturi quas repellendus est! Accusamus sit maxime fuga nisi, illo suscipit ipsa odit exercitationem atque aut id sequi deserunt, ea doloremque quos perferendis nobis vitae aspernatur, distinctio ipsum magni? Atque quia quisquam accusantium, tempora iure repudiandae non! Placeat aut praesentium magni ea repellendus deleniti voluptatibus facere, aliquid laudantium, minima enim. Ab accusamus harum iure sit recusandae obcaecati adipisci inventore excepturi eaque placeat impedit quo aliquam provident, dignissimos, officiis ea dolores quod id deleniti maxime asperiores et exercitationem! Et perferendis veniam hic tenetur amet quasi iusto eius obcaecati! Quo delectus vero quam tempore repellat maxime error odio, consequatur blanditiis. A fugiat libero magnam at delectus amet ex maiores, voluptatibus consequuntur beatae suscipit.
            </p>
          </div>
        )}

        {activeTab === 'conversation' && (
          <div className="conversation custom-scroll flex flex-col gap-2 h-full overflow-auto">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="incoming flex ml-5">
                  <div className="image">
                    <img src="/images/conversation/Ellipse 3.png" alt="" />
                  </div>
                  <div className="message p-3 bg-[#B70849] w-[40vw] mr-auto ml-5 text-left text-white">
                    Father, my manager asked me to manipulate financial reports to make the company look better. I feel uneasy, but I fear losing my job. What should I do?
                  </div>
                </div>

                <div className="outgoing flex items-center justify-center mr-5">
                  <div className="image"></div>
                  <div className="message bg-[#662DFF] p-3 w-[40vw] ml-auto mr-5 text-left text-white">
                    Father, my manager asked me to manipulate financial reports to make the company look better. I feel uneasy, but I fear losing my job. What should I do?
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Conversation