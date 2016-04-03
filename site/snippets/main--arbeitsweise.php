<?php
$page = page('arbeitsweise');
$images = $page->images()->sortBy('sort', 'asc');
?>
<section id="arbeitsweise" class="arbeitsweise">
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
          <?php
          $imageW320 = $image->resize(320, null, 70)->url();
          $imageW640 = $image->resize(640, null, 70)->url();
          $imageW960 = $image->resize(960, null, 70)->url();
          $imageW1280 = $image->resize(1280, null, 60)->url();
          ?>
          <img src="<?= $image->resize(640, null, 80)->url() ?>"
               srcset="<?= $imageW1280 ?> 1280w,
                <?= $imageW960 ?> 960w,
                <?= $imageW640 ?> 640w,
                <?= $imageW320 ?> 320w"
               sizes="(min-width: 768px) 460px,
                100vw"
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
