import MiniBanner from '/src/components/MiniBanner';
import Section from '/src/components/Section';
import '/src/stylesheets/library-overview.css';
import AmsterdamHouseA from '/src/assets/library/amsterdam/amsterdamHouseA';
import AmsterdamHouseB from '/src/assets/library/amsterdam/amsterdamHouseB';
import AmsterdamHouseC from '/src/assets/library/amsterdam/amsterdamHouseC';
import AmsterdamHouseD from '/src/assets/library/amsterdam/amsterdamHouseD';
import AmsterdamHouseE from '/src/assets/library/amsterdam/amsterdamHouseE';


function LibraryOverview() {
  return (
    <main>
      <MiniBanner title="Library" id="buildings-library" />

        <Section title="buildings">
          <div id="amsterdamHouseA-library">
            <AmsterdamHouseA />
          </div>
            <AmsterdamHouseB />
            <AmsterdamHouseC />
            <AmsterdamHouseD />
            <AmsterdamHouseE />
        </Section>
    </main>
  );
}

export default LibraryOverview;
