<?php
$page = page('kontakt');
?>
<section id="kontakt" class="kontakt" hidden>
  <div class="kontakt--card">
    <?= $page->contact()->kt() ?>
  </div>
  <div class="kontakt--square--container">
    <div class="kontakt--square">
    </div>
  </div>
  <footer class="kontakt--footer">
    <?= $page->footer1()->kt() ?>
    <?php
    $image = $page->file($page->footer1_image()->value());
    ?>
    <img src="<?= $image->resize(70)->url() ?>"
         srcset="<?= $image->resize(140)->url() ?> 2x"
         alt="<?= $image->alt() ?>">
    <div class="kontakt--footer--imprint">
      <?= $page->footer2()->kt() ?>
    </div>
  </footer>
  <div class="seperator">
    <div class="line"></div>
    <div class="circle"></div>
    <div class="line"></div>
  </div>
</section>
