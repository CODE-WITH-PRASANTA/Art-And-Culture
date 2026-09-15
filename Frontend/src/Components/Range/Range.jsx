import React, { useState } from 'react';
import './Range.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Range = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className="range">
      <div className="range__container">
        {/* Subtitle / Category */}
        <span className="range__subtitle">A SHORT GUIDE</span>

        {/* Main Title */}
        <h2 className="range__title">The Balaji range</h2>

        {/* Intro Paragraph */}
        <p className="range__intro">
          Everything we make bearing Venkateswara, not only the mandir murti. Balaji, Venkateswara, Srinivasa and Govinda are names for the same deity, the form of Vishnu at Tirumala. In South Indian households he is the most kept deity of all, and this is the collection our customers return to most often.
        </p>

        {/* Section 1: The formats */}
        <div className="range__section">
          <h3 className="range__section-title">The formats, and where each belongs</h3>
          <p className="range__paragraph">
            This matters more here than in most collections, because the same deity is made in five quite different things.
          </p>
          <p className="range__paragraph">
            The <strong>full standing murti</strong> is the temple form: four-armed, crowned, with shankha and chakra and the namam. Eight to nine inches in our range, and it wants a dedicated surface. The Srinivasa Mangapuram form is the standing figure from the temple near Tirupati where the deity is said to have stayed before the wedding.
          </p>
          <p className="range__paragraph">
            The <strong>face idol</strong> is the crowned head alone, which is how most devotees actually picture him, since the temple deity is seen adorned. It reads powerfully at a smaller size and sits where a full murti will not. Made plated and in antique silver.
          </p>
          <p className="range__paragraph">
            Balaji Charan, the feet with shankha, chakra and namam, is the smallest and most portable. At 2 inches with a flat base it is the single best selling piece in our <a href="#car-dashboard" className="range__link">car dashboard</a> range, because a flat footprint suits a dashboard far better than a standing figure.
          </p>
        </div>

        {/* Collapsible Content Area */}
        <div className={`range__collapsible ${isExpanded ? 'range__collapsible--expanded' : ''}`}>
          <div className="range__collapsible-inner">
            <div className="range__section">
              <p className="range__paragraph">
                Wall pieces, including a 12 inch face wall hanging and a 3D wall frame. A wall piece is a different decision from a shelf murti: it catches light from one angle only, so it needs a wall the lamp or window actually reaches. See <a href="#wall-decor" className="range__link">wall decor</a>.
              </p>
              <p className="range__paragraph">
                A diya, where Balaji and Lakshmi carry the flame rather than standing as murtis, and a <a href="#pocket-temple" className="range__link">pocket temple</a> that closes around the deity for travel or a desk. Also Gajalakshmi Balaji, pairing him with Lakshmi flanked by elephants, and combos.
              </p>
            </div>

            {/* Section 2: The namam */}
            <div className="range__section">
              <h3 className="range__section-title">The namam, and why it matters</h3>
              <p className="range__paragraph">
                The white and red mark on the forehead is the Vaishnava tilaka, not decoration. The white lines represent the feet of Vishnu and the red centre is Lakshmi. It is the fastest way to confirm a piece is genuinely a Balaji rather than a generic Vishnu, and worth checking in the photograph, since it is the detail most often lost in a cheap casting.
              </p>
              <p className="range__paragraph">
                For Vishnu in his other forms, see <a href="#lord-vishnu" className="range__link">Lord Vishnu idols</a>; paired with Lakshmi as consort, <a href="#lakshmi-narayan" className="range__link">Lakshmi Narayan idols</a>.
              </p>
            </div>

            {/* Section 3: Which material */}
            <div className="range__section">
              <h3 className="range__section-title">Which material</h3>
              <p className="range__paragraph">
                Most of this collection is <a href="#gold-silver" className="range__link">gold and silver plated</a>, and for Balaji that suits the subject: the temple deity is seen gilded and jewelled, so a plated finish reads closer to how devotees picture him than raw metal does. Keep plated pieces dry, dust with a soft cloth, no abhishek.
              </p>
              <p className="range__paragraph">
                Antique finish gives a deeper, more sculptural look and suits the face idol particularly well. It carries a patina applied on purpose, so dry dusting only, never a cleaning paste.
              </p>
              <p className="range__paragraph">
                Brass is the choice if the piece will be bathed or handled daily; see <a href="#brass-idols" className="range__link">brass idols</a>.
              </p>
            </div>

            {/* Section 4: Size and placement */}
            <div className="range__section">
              <h3 className="range__section-title">Size and placement</h3>
              <p className="range__paragraph">
                Two to four inches for a desk, a car or a small shelf. Seven to nine inches for a home mandir with a dedicated surface. Wall pieces are their own decision.
              </p>
              <p className="range__paragraph">
                Measure the crown. On a standing Balaji the kiritamukuta adds real height above the head, and the listed dimension is the piece, not the figure.
              </p>
              <p className="range__paragraph">
                The northeast is the quadrant associated with the household shrine in the vastu tradition, which has a genuine textual lineage. Specific facing rules are custom rather than text.
              </p>
            </div>

            {/* Section 5: As a gift */}
            <div className="range__section">
              <h3 className="range__section-title">As a gift</h3>
              <p className="range__paragraph">
                A Balaji is among the most given gifts in South Indian households, for weddings, housewarmings and after a Tirumala visit. The face idol and the charan travel best. For a household that already has a murti, the diya or a wall piece is the more useful gift. See <a href="#housewarming" className="range__link">griha pravesh and housewarming gifts</a> and <a href="#wedding" className="range__link">wedding gifts</a>; for volume, <a href="#corporate" className="range__link">corporate gifts</a> or the <a href="#bulk-order" className="range__link">bulk order enquiry page</a>.
              </p>
              <p className="range__paragraph">
                To furnish the mandir, <a href="#pooja-essentials" className="range__link">pooja essentials</a>; for the wider pantheon, <a href="#god-idols" className="range__link">god idols and figurines</a>.
              </p>
            </div>

            {/* Section 6: Before you order */}
            <div className="range__section">
              <h3 className="range__section-title">Before you order</h3>
              <ul className="range__bullet-list">
                <li>Decide the format first. A full murti, a face idol, a charan and a wall piece suit completely different places.</li>
                <li>Check the namam is crisp in the photograph. It is the detail a poor casting loses.</li>
                <li>Measure including the crown on a standing figure.</li>
                <li>Plated and antique finishes are display pieces. Buy brass if it will be bathed.</li>
                <li>For a car, the charan beats a standing murti on footprint every time.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Read More / Show Less Button */}
        <div className="range__btn-wrapper">
          <button className="range__toggle-btn" onClick={toggleReadMore}>
            <span>{isExpanded ? 'SHOW LESS' : 'READ FULL GUIDE'}</span>
            {isExpanded ? <FiChevronUp className="range__btn-icon" /> : <FiChevronDown className="range__btn-icon" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Range;