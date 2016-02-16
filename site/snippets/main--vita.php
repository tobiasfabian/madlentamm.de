<?php
$page = page('vita');
$image = $page->image();
?>
<section id="vita" class="vita" hidden>
  <aside class="vita--image">
    <figure>
      <img src="<?= $image->resize(300)->url() ?>"
           srcset="<?= $image->resize(600)->url() ?> 2x"
           alt="<?= $image->alt() ?>">
    </figure>
  </aside>
  <article class="vita--textbox">
    <?= $page->text()->kt() ?>
  </article>
  <div class="seperator">
    <div class="line"></div>
    <div class="circle"></div>
    <div class="line"></div>
  </div>
</section>
