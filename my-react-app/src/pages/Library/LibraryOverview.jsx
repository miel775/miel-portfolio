import MiniBanner from '/src/components/MiniBanner';
import Section from '/src/components/Section';
import '/src/stylesheets/library-overview.css';
import AmsterdamHouseA from '/src/assets/library/amsterdamHouseA';
import AmsterdamHouseB from '/src/assets/library/amsterdamHouseB';
import AmsterdamHouseC from '/src/assets/library/amsterdamHouseC';
import AmsterdamHouseD from '/src/assets/library/amsterdamHouseD';
import AmsterdamHouseE from '/src/assets/library/amsterdamHouseE';


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
