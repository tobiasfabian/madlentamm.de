<?php
$page = page('kontakt');
?>
<section id="kontakt" class="kontakt">
  <div class="kontakt--card">
    <?= $page->contact()->kt() ?>
  </div>
  <div class="kontakt--square--container">
    <div class="kontakt--square">
    </div>
  </div>
  <div class="kontakt--banner">
    <?php
    $image = $page->file($page->footer1_banner()->value());
    ?>
    <a href="https://www.systemaufstellung.com" target="_blank" rel="noopener">
        <img src="<?= $image->resize(560)->url() ?>" srcset="<?= $image->resize(624)->url() ?> 1.2x" alt="Banner: 30 Jahre Mauerfall auf Spurensuche, DgfS-Tagung in Naumburg, 8. – 10. November 2019">
    </a>
  </div>
  <footer class="kontakt--footer">
    <?= $page->footer1()->kt() ?>
    <?php
    $image = $page->file($page->footer1_image()->value());
    ?>
    <img src="<?= $image->resize(70)->url() ?>" srcset="<?= $image->resize(140)->url() ?> 2x" alt="Logo: DGSV">
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
