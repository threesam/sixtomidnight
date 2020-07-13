<script>
  export let teamMember
</script>

<style>
  div {
    width: 300px;
    background: rgba(var(--rgb-dark-grey), 0.2);
    border-radius: 1rem;
  }
  h2,
  figcaption {
    margin: 0;
  }
  h2 {
    padding: 1rem;
  }
  figcaption {
    padding-bottom: 0.5rem;
  }
</style>

<div>
  <h2>{teamMember.name}</h2>
  <figure>
    <img
      src={`${teamMember.image}?fit=crop&crop=entropy&w=300&h=300`}
      alt={teamMember.alt} />
    <figcaption>{teamMember.caption}</figcaption>
  </figure>
</div>
