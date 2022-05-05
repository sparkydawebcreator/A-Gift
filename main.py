from kivy.app import App
from kivy.uix.image import Image
from kivy.core.audio import SoundLoader, Sound

import random


class App(App):

    def build(self):
        mainImage = Image(source="rick-roll-rick-astley.gif", anim_delay=0.1,
                        allow_stretch=True,
                          pos=(0, 0),
                          #pos=(random.randint(100, 500),
                          #     random.randint(100, 500)),
                          #size=(100, 100)
                          #keep_ratio = False,
                          # keep_data=True
                          )
        self.sound = SoundLoader.load("music.mp3")  # audio here
        if self.sound:
            self.sound.play()
              
        return mainImage


if __name__ == "__main__":
    #Config.set('graphics', 'maxfps', '120')
    app = App()
    app.run()
