<?php
$page = page('home');
?>
<section id="start" class="start">
  <div class="container">
    <div id="start--drawing"></div>
    <?php foreach($page->terms()->toStructure() as $term): ?>
    <article class="start--term <?= $term->title() ?>" data-id="<?= $term->title() ?>" data-connection="<?= $term->connection() ?>">
      <a href="#">
        <div class="circle"></div>
        <h1><span><?= $term->title() ?></span></h1>
      </a>
      <div class="text" hidden>
        <?= $term->text()->kt() ?>
      </div>
    </article>
    <?php endforeach ?>
  </div>
  <div class="seperator">
    <div class="line"></div>
    <div class="circle"></div>
    <div class="line"></div>
  </div>
</section>
