<?php snippet('head') ?>

<?php snippet('border') ?>

<?php snippet('header') ?>

<?php snippet('nav') ?>

<main class="main">

  <?php snippet('main--supervision') ?>
  <?php snippet('main--coaching') ?>

  <div class="scroll-container">

    <?php snippet('main--home') ?>

    <?php snippet('main--vita') ?>

    <?php snippet('main--arbeitsweise') ?>

    <?php snippet('main--kontakt') ?>

  </div>

  <div class="kontakt--banner kontakt--banner_global">
    <?php
    $kontaktPage = page('kontakt');
    $image = $kontaktPage->file($kontaktPage->footer1_banner()->value());
    ?>
    <a href="https://www.systemaufstellung.com" target="_blank" rel="noopener">
        <img src="<?= $image->resize(560)->url() ?>" srcset="<?= $image->resize(624)->url() ?> 1.2x" alt="Banner: 30 Jahre Mauerfall auf Spurensuche, DgfS-Tagung in Naumburg, 8. – 10. November 2019">
    </a>
  </div>


  <?php snippet('main--datenschutz') ?>

</main>

<?php snippet('foot') ?>
