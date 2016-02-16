<?php
$page = page('arbeitsweise');
$images = $page->images()->sortBy('sort', 'asc');
?>
<section id="arbeitsweise" class="arbeitsweise" hidden>
  <div class="arbeitsweise--gallery">
    <nav class="arbeitsweise--gallery--nav">
      <a class="arbeitsweise--gallery--nav--previous">
        <div></div>
        <div></div>
        <div></div>
      </a>
      <a class="arbeitsweise--gallery--nav--next">
        <div></div>
        <div></div>
        <div></div>
      </a>
    </nav>
    <div class="arbeitsweise--gallery--captions">
      <div class="arbeitsweise--gallery--captions--container">
        <?php
        foreach($images as $image):
        ?>
        <section>
          <?= $image->text()->kt() ?>
        </section>
        <?php
        endforeach;
        ?>
      </div>
    </div>
    <div class="arbeitsweise--gallery--images">
      <div class="arbeitsweise--gallery--images--alternative-nav">
        <div class="arbeitsweise--gallery--images--alternative-nav--previous"></div>
        <div class="arbeitsweise--gallery--images--alternative-nav--next"></div>
      </div>
      <div class="arbeitsweise--gallery--images--container">
        <?php
        foreach($images as $image):
        ?>
        <figure>
          <img src="<?= $image->resize(640)->url() ?>"
               srcset="<?= $image->resize(1280)->url() ?> 2x"
               alt="<?= $image->alt() ?>">
          <figcaption>
            Damit Ihr indess erkennt, woher dieser ganze Irrthum gekommen ist, und weshalb man die Lust anklagt und den Schmerz lobet, so will ich Euch Alles eröffnen und auseinander setzen, was jener Begründer der Wahrheit und gleichsam Baumeister des glücklichen Lebens selbst darüber gesagt hat.
          </figcaption>
        </figure>
        <?php
        endforeach;
        ?>
      </div>
    </div>
  </div>
  <div class="seperator">
    <div class="line"></div>
    <div class="circle"></div>
    <div class="line"></div>
  </div>
</section>
